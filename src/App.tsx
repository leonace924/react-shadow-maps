import React from 'react';
import ShadowMap from 'components/ShadowMap';
import ShadowChart from 'components/ShadowChart';
import 'react-circular-progressbar/dist/styles.css';
import SearchBar from 'components/SearchBar';
import WeatherDetail from 'components/WeatherDetail';
import MaturityDetail from 'components/MaturityDetail';
import LineChart from 'components/LineChart';

const App = () => {
  return (
    <div className="bg-gray-50">
      <div className="container p-8 mx-auto">
        <SearchBar />
        <WeatherDetail />
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-[3fr__2fr] gap-6 relative z-10">
          <div className="relative w-full h-[500px] rounded-md overflow-hidden">
            <div className="absolute z-30 px-5 py-3 bg-white rounded-lg right-5 top-5">
              <ShadowChart />
            </div>
            <ShadowMap />
          </div>

          <div className="bg-[#7E8B86] p-8 rounded-md">
            <MaturityDetail />
            <div className="mt-3">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
