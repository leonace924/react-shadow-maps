import React, { useRef, useState, useEffect, useCallback } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import RasterSource from 'ol/source/Raster';
import OSM from 'ol/source/OSM';
import { transform } from 'ol/proj';
import { createXYZ } from 'ol/tilegrid';
import XYZ from 'ol/source/XYZ';
import { useGlobalStore } from 'store';
import 'ol/ol.css';

const ShadowMap = () => {
  const updateShadow = useGlobalStore((state) => state.updateData);

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

  const getShadowTime = useCallback(
    (pixel_value: any, month: string) => {
      const myArray = pixel_value.split(',');
      const shadow_time = (parseInt(myArray[3]) / 255) * 360;
      updateShadow({
        month: month,
        minutes: shadow_time,
        percentage: Number(((shadow_time * 100) / 360).toFixed(2)),
      });
    },
    [updateShadow],
  );

  const rasterFunction = (pixels: any): any => {
    const pixel = [0, 0, 0, 0];
    const val = pixels[0][3] / 255.0;
    pixel[0] = 66 * val;
    pixel[1] = 113 * val;
    pixel[2] = 143 * val;
    pixel[3] = 255 * val;
    return pixel;
  };

  const xyzSourceOption = (month: string) => {
    return {
      url: `/assets/midtown/${month}/{z}/{x}/{y}.png`,
      tileGrid: createXYZ({ tileSize: 256, minZoom: 16, maxZoom: 16 }),
      crossOrigin: 'anonymous',
      maxZoom: 16,
    };
  };

  useEffect(() => {
    if (!mapElement?.current) return;

    const source_jan = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('jan'),
        }),
      ],
      operation: rasterFunction,
    });

    const source_feb = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('feb'),
        }),
      ],
      operation: rasterFunction,
    });

    const layer_jan = new ImageLayer({
      source: source_jan,
      zIndex: 1,
    });
    const layer_feb = new ImageLayer({
      source: source_feb,
      zIndex: 1,
    });

    map?.setLayers([
      new TileLayer({
        source: new XYZ({
          url: 'https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=c4ef9c97bd094afeabe52308c38f3e9a',
          crossOrigin: 'anonymous',
        }),
      }),
    ]);
    map?.setTarget(mapElement?.current);
    map?.addLayer(layer_jan);
    map?.addLayer(layer_feb);

    map?.on('pointermove', (event) => {
      const pixel_jan = layer_jan.getData(event.pixel)?.toString();
      if (pixel_jan) {
        getShadowTime(pixel_jan, 'January');
      }

      const pixel_feb = layer_jan.getData(event.pixel)?.toString();
      if (pixel_feb) {
        getShadowTime(pixel_feb, 'February');
      }
    });
    setMap(map);

    return () => {
      if (map) {
        map.removeLayer(layer_jan);
        map.removeLayer(layer_feb);
      }
    };
  }, [getShadowTime, map]);

  return (
    <div className="w-full h-screen">
      <div ref={mapElement} className="w-full h-full map" />
    </div>
  );
};

export default React.memo(ShadowMap);
