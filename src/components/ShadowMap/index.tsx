import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import RasterSource from 'ol/source/Raster';

import OSM from 'ol/source/OSM';
import { transform, toLonLat } from 'ol/proj';
import { createXYZ } from 'ol/tilegrid';
import XYZ from 'ol/source/XYZ';
import { useGlobalStore } from 'store';
import { monthsData } from 'constant/months';
import 'ol/ol.css';

const ShadowMap = () => {
  const north = 40.776381784828956;
  const west = -74.00390625;
  const south = 40.74725696280421;
  const east = -73.9599609375;

  let newlonLat = transform([west, north], 'EPSG:4326', 'EPSG:3857');
  const west_3857 = newlonLat[0];
  const north_3857 = newlonLat[1];

  newlonLat = transform([east, south], 'EPSG:4326', 'EPSG:3857');
  const east_3857 = newlonLat[0];
  const south_3857 = newlonLat[1];

  const initialMap = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: transform([-73.981934, 40.761821], 'EPSG:4326', 'EPSG:3857'),
      zoom: 15,
      minZoom: 15,
      extent: [west_3857, south_3857, east_3857, north_3857], // restrict the extent following the four coordinates
      // maxZoom: 15,
    }),
  });

  const mapElement = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | undefined>(initialMap);
  const updateShadow = useGlobalStore((state) => state.updateData);
  const setCoordinate = useGlobalStore((state) => state.setCoordinate);
  const selectedDate = useGlobalStore((state) => state.selectedDate);
  const selectedMon = dayjs(selectedDate).format('M');

  const getShadowTime = useCallback(
    (pixel_value: any, month: string) => {
      const myArray = pixel_value.split(',');
      const index = Object.keys(monthsData).findIndex((item) => item === month) ?? 0;
      const mins = Object.values(monthsData)[index] * 60;
      const shadow_time = (parseInt(myArray[3]) / 255) * mins;
      updateShadow({
        month: month,
        minutes: shadow_time,
        percentage: Number(((shadow_time * 100) / mins).toFixed(2)),
      });
    },
    [updateShadow],
  );

  const rasterFunction = (pixels: any): any => {
    const pixel = [0, 0, 0, 0];
    const val = pixels[0][3] / 255.0;
    pixel[0] = 215 * val;
    pixel[1] = 216 * val;
    pixel[2] = 216 * val;
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

  const imageLayerOption = useMemo(() => {
    return {
      zIndex: 1,
      opacity: 1,
    };
  }, []);

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
    const source_mar = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('mar'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_apr = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('apr'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_may = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('may'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_jun = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('jun'),
        }),
      ],
      operation: rasterFunction,
    });

    const source_jul = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('jul'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_aug = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('aug'),
        }),
      ],
      operation: rasterFunction,
    });

    const source_sep = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('sep'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_oct = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('oct'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_nov = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('nov'),
        }),
      ],
      operation: rasterFunction,
    });
    const source_dec = new RasterSource({
      sources: [
        new XYZ({
          ...xyzSourceOption('dec'),
        }),
      ],
      operation: rasterFunction,
    });

    const layer_jan = new ImageLayer({
      source: source_jan,
      ...imageLayerOption,
    });
    const layer_feb = new ImageLayer({
      source: source_feb,
      ...imageLayerOption,
    });
    const layer_mar = new ImageLayer({
      source: source_mar,
      ...imageLayerOption,
    });
    const layer_apr = new ImageLayer({
      source: source_apr,
      ...imageLayerOption,
    });
    const layer_may = new ImageLayer({
      source: source_may,
      ...imageLayerOption,
    });
    const layer_jun = new ImageLayer({
      source: source_jun,
      ...imageLayerOption,
    });
    const layer_jul = new ImageLayer({
      source: source_jul,
      ...imageLayerOption,
    });
    const layer_aug = new ImageLayer({
      source: source_aug,
      ...imageLayerOption,
    });
    const layer_sep = new ImageLayer({
      source: source_sep,
      ...imageLayerOption,
    });
    const layer_oct = new ImageLayer({
      source: source_oct,
      ...imageLayerOption,
    });
    const layer_nov = new ImageLayer({
      source: source_nov,
      ...imageLayerOption,
    });
    const layer_dec = new ImageLayer({
      source: source_dec,
      ...imageLayerOption,
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

    switch (selectedMon) {
      case '1':
        map?.addLayer(layer_jan);
        break;
      case '2':
        map?.addLayer(layer_feb);
        break;
      case '3':
        map?.addLayer(layer_mar);
        break;
      case '4':
        map?.addLayer(layer_apr);
        break;
      case '5':
        map?.addLayer(layer_may);
        break;
      case '6':
        map?.addLayer(layer_jun);
        break;
      case '7':
        map?.addLayer(layer_jul);
        break;
      case '8':
        map?.addLayer(layer_aug);
        break;
      case '9':
        map?.addLayer(layer_sep);
        break;
      case '10':
        map?.addLayer(layer_oct);
        break;
      case '11':
        map?.addLayer(layer_nov);
        break;
      case '12':
        map?.addLayer(layer_dec);
        break;
      default:
        map?.addLayer(layer_jan);
        break;
    }

    map?.on('pointermove', (event) => {
      const coordinate = toLonLat(event.coordinate);
      setCoordinate(coordinate);

      const pixel_jan = layer_jan.getData(event.pixel)?.toString();
      if (pixel_jan) {
        getShadowTime(pixel_jan, 'January');
      }
      const pixel_feb = layer_jan.getData(event.pixel)?.toString();
      if (pixel_feb) {
        getShadowTime(pixel_feb, 'February');
      }
      const pixel_mar = layer_mar.getData(event.pixel)?.toString();
      if (pixel_mar) {
        getShadowTime(pixel_mar, 'March');
      }

      const pixel_apr = layer_apr.getData(event.pixel)?.toString();
      if (pixel_apr) {
        getShadowTime(pixel_apr, 'April');
      }
      const pixel_may = layer_may.getData(event.pixel)?.toString();
      if (pixel_may) {
        getShadowTime(pixel_may, 'May');
      }
      const pixel_jun = layer_jun.getData(event.pixel)?.toString();
      if (pixel_jun) {
        getShadowTime(pixel_jun, 'June');
      }
      const pixel_jul = layer_jul.getData(event.pixel)?.toString();
      if (pixel_jul) {
        getShadowTime(pixel_jul, 'July');
      }
      const pixel_aug = layer_aug.getData(event.pixel)?.toString();
      if (pixel_aug) {
        getShadowTime(pixel_aug, 'August');
      }
      const pixel_sep = layer_sep.getData(event.pixel)?.toString();
      if (pixel_sep) {
        getShadowTime(pixel_sep, 'September');
      }
      const pixel_oct = layer_oct.getData(event.pixel)?.toString();
      if (pixel_oct) {
        getShadowTime(pixel_oct, 'October');
      }
      const pixel_nov = layer_nov.getData(event.pixel)?.toString();
      if (pixel_nov) {
        getShadowTime(pixel_nov, 'November');
      }
      const pixel_dec = layer_dec.getData(event.pixel)?.toString();
      if (pixel_dec) {
        getShadowTime(pixel_dec, 'December');
      }
    });
    setMap(map);

    return () => {
      if (map) {
        map.removeLayer(layer_jan);
        map.removeLayer(layer_feb);
        map?.removeLayer(layer_mar);
        map?.removeLayer(layer_apr);
        map?.removeLayer(layer_may);
        map?.removeLayer(layer_jun);
        map?.removeLayer(layer_jul);
        map?.removeLayer(layer_aug);
        map?.removeLayer(layer_sep);
        map?.removeLayer(layer_oct);
        map?.removeLayer(layer_nov);
        map?.removeLayer(layer_dec);
      }
    };
  }, [getShadowTime, imageLayerOption, map, selectedMon, setCoordinate]);

  return (
    <div className="w-full h-full">
      <div ref={mapElement} className="w-full h-full cursor-pin" />
    </div>
  );
};

export default React.memo(ShadowMap);
