import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useGlobalStore } from 'store';

const ShadowChart = () => {
  const shadowStore = useGlobalStore((state) => state.shadowStore);

  console.log(shadowStore);

  const percentage = shadowStore[0].percentage;
  // const percentage = 50;

  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Shadow Time</h3>
      <div style={{ width: 140, height: 140 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={0}
          styles={buildStyles({
            backgroundColor: '#E7FADA',
            textColor: '#5DB34C',
            pathColor: '#5DB34C',
            trailColor: '#E7FADA',
          })}
        />
      </div>

      <p className="mt-2">In Shadow (mins)</p>
    </div>
  );
};

export default ShadowChart;
