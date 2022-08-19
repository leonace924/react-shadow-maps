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
        <ul className="text-base font-medium list-disc list-inside">
          <li>Wind Gust Speed (m/s) - {gustSpeed}</li>
          <li>Average Wind Speed (m/s) - {avgSpeed}</li>
          <li>Average Wind Direction (degrees) - {windDirection}</li>
          <li>Direction of Maximum 2 Minute Wind Gust (degrees) - {directionGust}</li>
        </ul>
      </DropDownBox>

      <DropDownBox
        iconName="hot"
        title="Temperature"
        value={<h4 className="text-xl font-medium">{`${avgTemp?.toFixed(2)}°F`}</h4>}
      >
        <ul className="text-base font-medium list-disc list-inside">
          <li>Average Temperature (Fahrenheit) - {avgTemp?.toFixed(2)}</li>
          <li>Maximum Temperature (Fahrenheit) - {maxTemp?.toFixed(2)}</li>
          <li>Minimum Temperature (Fahrenheit) - {minTemp?.toFixed(2)}</li>
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
        <ul className="text-base font-medium list-disc list-inside">
          <li>
            Day Total Global Horizontal Solar Irradiance (W/m^2) [Clear Sky] -{' '}
            {totalHorizontalSolar}
          </li>
          <li>Average Solar Radiation - {avgSolarRadiation} W/M^2</li>
          <li>
            Maximum Value of Direct Normal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            {maxNormalSolar}
          </li>
          <li>
            Maximum Value of Global Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            {maxHorizontalSolar}
          </li>
          <li>Average Direct Normal Solar Irradiance (W/m^2) [Clear Sky] - {avgDirectSolar}</li>
          <li>
            Maximum Value of Diffuse Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            {maxDiffuseSolar}
          </li>
          <li>Average Global Horizontal Solar Irradiance (W/m^2) - {avgGlobalSolar}</li>
          <li>Day Total Direct Normal Solar Irradiance (W/m^2) [Clear Sky] - {totalNormalSolar}</li>
          <li>Total Solar Radiation (W/M^2) - {totalSolar}</li>
          <li>Sunrise - {sunrise}</li>
          <li>Sunset - {sunset}</li>
          <li>Maximum UV Index (0-11+) - {maxUV}</li>
          <li>Shadows Time - {minsShadow} mins</li>
        </ul>
      </DropDownBox>
    </div>
  );
};

export default WeatherDetail;
