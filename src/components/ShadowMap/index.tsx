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
      center: [0, 0],
      zoom: 0,
    }),
  });

  const mapElement = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | undefined>(initialMap);

  useEffect(() => {
    if (!mapElement?.current) return;

    const shadow = new XYZ({
      // attributions: attributions,
      // url: 'https://storage.googleapis.com/chicago_shadow_map/chi-dec-21/{z}/{x}/{y}.png',
      url: `/assets/chicago-shadows/chi-dec-21/{z}/{x}/{y}.png`,
      tileGrid: createXYZ({ tileSize: 256, minZoom: 15, maxZoom: 15 }),
      // maxZoom: 15,
      crossOrigin: 'anonymous',
    });
    const raster = new RasterSource({
      sources: [shadow],
      /**
       * Run calculations on pixel data.
       * @param {Array} pixels List of pixels (one per source).
       * @param {Object} data User data object.
       * @return {Array} The output pixel.
       */
      operation: function (pixels: any): any {
        const pixel = [0, 0, 0, 0];
        const val = pixels[0][0] / 255.0;
        pixel[0] = 66 * val;
        pixel[1] = 113 * val;
        pixel[2] = 143 * val;
        pixel[3] = 255 * val;
        return pixel;
      },
    });
    const raster_layer = new ImageLayer({
      source: raster,
      zIndex: 1,
    });

    map?.setLayers([
      new TileLayer({
        source: new XYZ({
          url: 'https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=c4ef9c97bd094afeabe52308c38f3e9a',
          // 'https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        }),
      }),
      raster_layer,
    ]);
    map?.setView(
      new View({
        center: transform([-87.6298, 41.8781], 'EPSG:4326', 'EPSG:3857'),
        zoom: 15,
      }),
    );
    map?.setTarget(mapElement?.current);

    setMap(map);
  }, [map]);

  return (
    <div className="container w-full h-screen">
      <div ref={mapElement} className="w-full h-full map" />
    </div>
  );
};

export default ShadowMap;
