import React, { useRef, useState, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import RasterSource from 'ol/source/Raster';
import OSM from 'ol/source/OSM';
import { transform } from 'ol/proj';
import { createXYZ } from 'ol/tilegrid';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';

const ShadowMap = () => {
  const initialMap = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: transform([-73.981934, 40.761821], 'EPSG:4326', 'EPSG:3857'),
      zoom: 16,
    }),
  });

  const mapElement = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | undefined>(initialMap);
  const [mousePosition, setMousePosition] = useState<any>();
  const [layerJan, setLayerJan] = useState<any>();

  const handleMapMove = (event: any) => {
    setMousePosition(event.pixel);
  };

  useEffect(() => {
    if (!mapElement?.current) return;

    const source_jan = new RasterSource({
      sources: [
        new XYZ({
          url: `/assets/midtown/jan/{z}/{x}/{y}.png`,
          tileGrid: createXYZ({ tileSize: 256, minZoom: 16, maxZoom: 16 }),
          crossOrigin: 'anonymous',
          maxZoom: 16,
        }),
      ],
      operation: function (pixels: any): any {
        const pixel = [0, 0, 0, 0];
        const val = pixels[0][3] / 255.0;
        pixel[0] = 66 * val;
        pixel[1] = 113 * val;
        pixel[2] = 143 * val;
        pixel[3] = 255 * val;
        return pixel;
      },
    });

    const layer_jan = new ImageLayer({
      source: source_jan,
      zIndex: 1,
    });
    setLayerJan(layer_jan);

    map?.setLayers([
      new TileLayer({
        source: new XYZ({
          url: 'https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=c4ef9c97bd094afeabe52308c38f3e9a',
          crossOrigin: 'anonymous',
        }),
      }),
    ]);
    map?.addLayer(layer_jan);
    map?.setTarget(mapElement?.current);
    map?.on('pointermove', handleMapMove);
    setMap(map);

    return () => {
      if (map) {
        map.removeLayer(layer_jan);
      }
    };
  }, [map]);

  useEffect(() => {
    if (!layerJan) return;

    layerJan.on('postrender', (event: any) => {
      const ctx = event.context;
      const pixelRatio = event.frameState.pixelRatio;

      if (mousePosition) {
        const x = mousePosition[0] * pixelRatio;
        const y = mousePosition[1] * pixelRatio;
        const data = ctx.getImageData(x, y, 1, 1).data;
        const valueWinter = (data[3] / 255) * 360;
        console.log('percent', (valueWinter * 100) / 360);
        // this.values[0].value = valueWinter;
        // this.values[0].percent = (valueWinter * 100) / 360;
      }
    });
  }, [layerJan, mousePosition]);

  return (
    <div className="w-full h-screen">
      <div ref={mapElement} className="w-full h-full map" />
    </div>
  );
};

export default React.memo(ShadowMap);
