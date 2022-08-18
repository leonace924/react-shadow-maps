import React from 'react';
import ShadowMap from 'components/ShadowMap';
import ShadowChart from 'components/ShadowChart';
import 'react-circular-progressbar/dist/styles.css';
import SearchBar from 'components/SearchBar';
import WeatherDetail from 'components/WeatherDetail';

const App = () => {
  return (
    <div className="bg-gray-50">
      <div className="container p-8 mx-auto">
        <SearchBar />
        <WeatherDetail />
        <div className="relative w-[800px] h-[600px]">
          <div className="absolute z-30 px-5 py-3 bg-white rounded-lg right-5 top-5">
            <ShadowChart />
          </div>
          <ShadowMap />
        </div>
      </div>
    </div>
  );
};

export default App;
