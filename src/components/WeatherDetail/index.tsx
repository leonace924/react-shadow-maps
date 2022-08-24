import React from 'react';
import DropDownBox from 'components/DropDownBox';
import { useGlobalStore } from 'store';
import { totalData } from 'constant/totalData';

const WeatherDetail = () => {
  const currentCoordinate = useGlobalStore((state) => state.currentCoordinate);
  const selectedDate = useGlobalStore((state) => state.selectedDate);

  const currentWeather = totalData['Weather'].find((item) => item.Date === selectedDate);
  const gustSpeed = currentWeather?.['Wind Gust Speed (m/s)'];
  const avgSpeed = currentWeather?.['Average Wind Speed (m/s)'];
  const windDirection = currentWeather?.['Average Wind Direction (degrees)'];
  const directionGust = currentWeather?.['Direction of Maximum 2 Minute Wind Gust (degrees)'];

  const avgTemp = currentWeather?.['Average Temperature (Fahrenheit)'];
  const maxTemp = currentWeather?.['Maximum temperature (Fahrenheit)'];
  const minTemp = currentWeather?.['Minimum Temperature (Fahrenheit)'];

  const sunrise = currentWeather?.['Sunrise Time'];
  const sunset = currentWeather?.['Sunset Time'];
  const minsShadow = currentWeather?.['Shadow time(s)'];
  const avgSolarRadiation = currentWeather?.['Average Solar Radiation (W/M^2)'];

  const totalHorizontalSolar =
    currentWeather?.['Day Total Global Horizontal Solar Irradiance (W/m^2) [Clear Sky]'];
  const maxNormalSolar =
    currentWeather?.['Maximum Value of Direct Normal Solar Irradiance in Day (W/m^2) [Clear Sky]'];
  const maxHorizontalSolar =
    currentWeather?.[
      'Maximum Value of Global Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky]'
    ];
  const avgDirectSolar =
    currentWeather?.['Average Direct Normal Solar Irradiance (W/m^2) [Clear Sky]'];
  const maxDiffuseSolar =
    currentWeather?.[
      'Maximum Value of Diffuse Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky]'
    ];
  const avgGlobalSolar = currentWeather?.['Average Global Horizontal Solar Irradiance (W/m^2)'];
  const totalNormalSolar =
    currentWeather?.['Day Total Direct Normal Solar Irradiance (W/m^2) [Clear Sky]'];
  const totalSolar = currentWeather?.['Total Solar Radiation (W/M^2)'];
  const maxUV = currentWeather?.['Maximum UV Index (0-11+)'];
  // const sunrise = currentWeather?.[];

  return (
    <div className="grid items-center grid-cols-3 gap-8 mb-14">
      <DropDownBox
        iconName="wind"
        title="Wind"
        value={<h4 className="text-xl font-medium">{`${gustSpeed} m/s`}</h4>}
      >
        <ul className="text-base">
          <li className="py-2 border-b border-solid border-b-gray-300">
            Wind Gust Speed (m/s) - <strong>{gustSpeed}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Average Wind Speed (m/s) - <strong>{avgSpeed}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Average Wind Direction (degrees) - <strong>{windDirection}</strong>
          </li>
          <li className="py-2">
            Direction of Maximum 2 Minute Wind Gust (degrees) - <strong>{directionGust}</strong>
          </li>
        </ul>
      </DropDownBox>

      <DropDownBox
        iconName="hot"
        title="Temperature"
        value={<h4 className="text-xl font-medium">{`${avgTemp?.toFixed(1)}°F`}</h4>}
      >
        <ul className="text-base">
          <li className="py-2 border-b border-solid border-b-gray-300 ">
            Average Temperature (Fahrenheit) - <strong>{avgTemp?.toFixed(1)}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Maximum Temperature (Fahrenheit) - <strong>{maxTemp?.toFixed(1)}</strong>
          </li>
          <li className="py-2">
            Minimum Temperature (Fahrenheit) - <strong>{minTemp?.toFixed(1)}</strong>
          </li>
        </ul>
      </DropDownBox>

      <DropDownBox
        iconName="sun"
        title="Sun"
        value={
          <div className="text-xs font-medium">
            <p>Sunrise - {sunrise}</p>
            <p>Sunset - {sunset}</p>
            <p>Mins in Shadows - {minsShadow} mins</p>
            <p>Average Solar Radiation - {avgSolarRadiation} W/M^2</p>
          </div>
        }
      >
        <ul className="text-base">
          <li className="py-2 border-b border-solid border-b-gray-300">
            Day Total Global Horizontal Solar Irradiance (W/m^2) [Clear Sky] -{' '}
            <strong>{totalHorizontalSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Average Solar Radiation - <strong>{avgSolarRadiation} W/M^2</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Maximum Value of Direct Normal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            <strong>{maxNormalSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Maximum Value of Global Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            <strong>{maxHorizontalSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Average Direct Normal Solar Irradiance (W/m^2) [Clear Sky] -{' '}
            <strong>{avgDirectSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Maximum Value of Diffuse Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            <strong>{maxDiffuseSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Average Global Horizontal Solar Irradiance (W/m^2) - <strong>{avgGlobalSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Day Total Direct Normal Solar Irradiance (W/m^2) [Clear Sky] -{' '}
            <strong>{totalNormalSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Total Solar Radiation (W/M^2) - <strong>{totalSolar}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Sunrise - <strong>{sunrise}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Sunset - <strong>{sunset}</strong>
          </li>
          <li className="py-2 border-b border-solid border-b-gray-300">
            Maximum UV Index (0-11+) - <strong>{maxUV}</strong>
          </li>
          <li className="pt-2">
            Shadows Time - <strong>{minsShadow} mins</strong>
          </li>
        </ul>
      </DropDownBox>
    </div>
  );
};

export default WeatherDetail;
