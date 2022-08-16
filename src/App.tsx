import React from 'react';
import ShadowMap from 'components/ShadowMap';
import ShadowChart from 'components/ShadowChart';
import 'react-circular-progressbar/dist/styles.css';

const App = () => {
  return (
    <div className="relative">
      <div className="absolute z-30 px-8 py-5 bg-white rounded-lg right-5 top-5">
        <ShadowChart />
      </div>
      <ShadowMap />
    </div>
  );
};

export default App;
