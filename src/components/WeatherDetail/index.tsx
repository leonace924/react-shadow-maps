import React from 'react';
import DropDownBox from 'components/DropDownBox';
import { totalData } from 'constant/totalData';

const WeatherDetail = () => {
  const gustSpeed = totalData['Weather'][0]['Wind Gust Speed (m/s)'];
  const avgSpeed = totalData['Weather'][0]['Average Wind Speed (m/s)'];
  const windDirection = totalData['Weather'][0]['Average Wind Direction (degrees)'];
  const directionGust =
    totalData['Weather'][0]['Direction of Maximum 2 Minute Wind Gust (degrees)'];

  const avgTemp = totalData['Weather'][0]['Average Temperature (Fahrenheit)'];
  const maxTemp = totalData['Weather'][0]['Maximum temperature (Fahrenheit)'];
  const minTemp = totalData['Weather'][0]['Minimum Temperature (Fahrenheit)'];

  const sunrise = totalData['Weather'][0]['Sunrise Time'];
  const sunset = totalData['Weather'][0]['Sunset Time'];
  const minsShadow = totalData['Weather'][0]['Shadow time(s)'];
  const avgSolarRadiation = totalData['Weather'][0]['Average Solar Radiation (W/M^2)'];

  const totalHorizontalSolar =
    totalData['Weather'][0]['Day Total Global Horizontal Solar Irradiance (W/m^2) [Clear Sky]'];
  const maxNormalSolar =
    totalData['Weather'][0][
      'Maximum Value of Direct Normal Solar Irradiance in Day (W/m^2) [Clear Sky]'
    ];
  const maxHorizontalSolar =
    totalData['Weather'][0][
      'Maximum Value of Global Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky]'
    ];
  const avgDirectSolar =
    totalData['Weather'][0]['Average Direct Normal Solar Irradiance (W/m^2) [Clear Sky]'];
  const maxDiffuseSolar =
    totalData['Weather'][0][
      'Maximum Value of Diffuse Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky]'
    ];
  const avgGlobalSolar =
    totalData['Weather'][0]['Average Global Horizontal Solar Irradiance (W/m^2)'];
  const totalNormalSolar =
    totalData['Weather'][0]['Day Total Direct Normal Solar Irradiance (W/m^2) [Clear Sky]'];
  const totalSolar = totalData['Weather'][0]['Total Solar Radiation (W/M^2)'];
  const maxUV = totalData['Weather'][0]['Maximum UV Index (0-11+)'];
  // const sunrise = totalData['Weather'][0][];

  return (
    <div className="grid items-center grid-cols-3 gap-8 mb-14">
      <DropDownBox
        iconName="wind"
        title="Wind"
        value={<h4 className="text-xl font-medium">{`${gustSpeed} m/s`}</h4>}
      >
        <div className="text-base font-medium">
          <p>Wind Gust Speed (m/s) - {gustSpeed}</p>
          <p>Average Wind Speed (m/s) - {avgSpeed}</p>
          <p>Average Wind Direction (degrees) - {windDirection}</p>
          <p>Direction of Maximum 2 Minute Wind Gust (degrees) - {directionGust}</p>
        </div>
      </DropDownBox>

      <DropDownBox
        iconName="hot"
        title="Temperature"
        value={<h4 className="text-xl font-medium">{`${avgTemp?.toFixed(2)}°F`}</h4>}
      >
        <div className="text-base font-medium">
          <p>Average Temperature (Fahrenheit) - {avgTemp?.toFixed(2)}</p>
          <p>Maximum Temperature (Fahrenheit) - {maxTemp?.toFixed(2)}</p>
          <p>Minimum Temperature (Fahrenheit) - {minTemp?.toFixed(2)}</p>
        </div>
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
        <div className="text-base font-medium">
          <p>
            Day Total Global Horizontal Solar Irradiance (W/m^2) [Clear Sky] -{' '}
            {totalHorizontalSolar}
          </p>
          <p>Average Solar Radiation - {avgSolarRadiation} W/M^2</p>
          <p>
            Maximum Value of Direct Normal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            {maxNormalSolar}
          </p>
          <p>
            Maximum Value of Global Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            {maxHorizontalSolar}
          </p>
          <p>Average Direct Normal Solar Irradiance (W/m^2) [Clear Sky] - {avgDirectSolar}</p>
          <p>
            Maximum Value of Diffuse Horizontal Solar Irradiance in Day (W/m^2) [Clear Sky] -{' '}
            {maxDiffuseSolar}
          </p>
          <p>Average Global Horizontal Solar Irradiance (W/m^2) - {avgGlobalSolar}</p>
          <p>Day Total Direct Normal Solar Irradiance (W/m^2) [Clear Sky] - {totalNormalSolar}</p>
          <p>Total Solar Radiation (W/M^2) - {totalSolar}</p>
          <p>Sunrise - {sunrise}</p>
          <p>Sunset - {sunset}</p>
          <p>Maximum UV Index (0-11+) - {maxUV}</p>
          <p>Shadows Time - {minsShadow} mins</p>
        </div>
      </DropDownBox>
    </div>
  );
};

export default WeatherDetail;
