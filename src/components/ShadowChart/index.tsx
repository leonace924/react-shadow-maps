import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useGlobalStore } from 'store';
import { months } from './constant';

const ShadowChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const shadowStore = useGlobalStore((state) => state.shadowStore);

  const percentage = shadowStore.find((item) => item.month === selectedMonth)?.percentage ?? 0;
  // const percentage = 50;

  const handleChange = (event: any) => {
    setSelectedMonth(event.target.value);
  };
  return (
    <div>
      <select className="w-full mb-3" onChange={handleChange} value={selectedMonth}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

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
