import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { totalData } from 'constant/totalData';
import { useGlobalStore } from 'store';

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  const selectedVariety = useGlobalStore((state) => state.selectedVariety);

  const chartData = totalData['Plant Information'].find(
    (item) => item.Variety === selectedVariety,
  )?.['Maturity Days (GDD)']?.Phases?.[0];

  if (!render) return <></>;

  return (
    <div className="bg-white">
      <Line
        data={{
          labels: ['Seed Phase', 'Vegetation', 'Blom', 'First Harvest', 'Last Harvest'].slice(
            0,
            chartData?.length,
          ),
          datasets: [
            {
              label: 'Basil',
              borderColor: '#008366',
              data: chartData,
              tension: 0.1,
              borderWidth: 2,
              backgroundColor: [
                'rgba(155, 177, 89, 0.2)',
                'rgba(1, 1, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top' as const,

              // labels: {
              //   pointStyle: 'circle',
              //   usePointStyle: true,
              //   boxWidth: 6,
              // },
            },
          },
        }}
        width="100%"
        height="60%"
      />
    </div>
  );
};

export default LineChart;
