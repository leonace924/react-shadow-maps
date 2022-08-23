import React from 'react';
import dayjs from 'dayjs';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useGlobalStore } from 'store';

const ShadowChart = () => {
  const shadowStore = useGlobalStore((state) => state.shadowStore);
  const selectedDate = useGlobalStore((state) => state.selectedDate);
  const selectedMonth = dayjs(selectedDate).format('MMMM');

  const percentage = shadowStore.find((item) => item.month === selectedMonth)?.percentage ?? 0;
  const value = shadowStore.find((item) => item.month === selectedMonth)?.minutes ?? 0;

  return (
    <div>
      {/* <select className="w-full mb-3" onChange={handleChange} value={selectedMonth}>
        {Object.keys(monthsData).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select> */}

      <h3 className="mb-2 text-base font-medium text-center">Shadow Time</h3>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${value.toFixed(1)}`}
          background
          backgroundPadding={0}
          styles={buildStyles({
            backgroundColor: '#FFEFB6',
            textColor: '#E2B100',
            pathColor: '#E2B100',
            trailColor: '#FFEFB6',
            textSize: '16px',
          })}
        />
      </div>

      <p className="mt-2 text-sm">In Shadow (mins)</p>
    </div>
  );
};

export default React.memo(ShadowChart);
