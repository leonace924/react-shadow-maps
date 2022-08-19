import React from 'react';
import dayjs from 'dayjs';
import Icon from 'components/Icons';
import { totalData } from 'constant/totalData';
import { useGlobalStore } from 'store';

const MaturityDetail = () => {
  const selectedDate = useGlobalStore((state) => state.selectedDate);
  const selectedVariety = useGlobalStore((state) => state.selectedVariety);

  const plantInformation = totalData['Plant Information']?.find(
    (item) => item.Variety === selectedVariety,
  );
  const keyIndex =
    plantInformation?.['Maturity Days (GDD)'].Date.findIndex(
      (item: any) => item === selectedDate,
    ) ?? 0;

  const maturityDays = plantInformation?.['Maturity Days (GDD)']['Maturity Days']?.[keyIndex];

  // const minDays = plantInformation?.['Maturity Days (GDD)']?.['Maturity Days']
  //   ? Math.min(plantInformation?.['Maturity Days (GDD)']?.['Maturity Days'])
  //   : 0;

  console.log(plantInformation?.['Maturity Days (GDD)']?.['Maturity Days']);
  const earliest = plantInformation?.['Maturity Days (GDD)']['Maturity Days']?.[0];

  const plantName = totalData['Plant Information']?.find(
    (item: any) => item.Variety === selectedVariety,
  )?.Plant;

  const harvestLength = totalData['Plant Information']?.find(
    (item: any) => item.Variety === selectedVariety,
  )?.['Harvest Window'];

  return (
    <div>
      <h3 className="mb-20 text-2xl font-normal text-white">
        <strong>{plantName}</strong> ({selectedVariety})
      </h3>
      <div className="max-w-[300px] mx-auto relative">
        <div className="p-6 bg-white rounded-lg pt-14 pt-15">
          <div className="rounded-full border border-[#178271] w-[105px] h-[105px] flex items-center justify-center flex-col absolute -top-[60px] bg-white mx-auto left-1/2 -translate-x-1/2">
            <Icon type="address" />
            <h4 className="text-2xl font-semibold">{maturityDays}</h4>
          </div>

          <div className="text-center">
            <p className="mb-3">
              <strong>
                {maturityDays
                  ? 'Days of Maturity'
                  : "This plant won't get matured before frost hits"}
              </strong>
            </p>

            {maturityDays && (
              <>
                <div className="mb-1 text-sm">
                  <span className="text-gray-500">Harvest Length:</span>
                  <span className="block">
                    <strong>{harvestLength} Days</strong>
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Earliest Planting Date:</span>
                  <span className="block">
                    <strong>{dayjs(earliest).format('MMMM D')}</strong>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaturityDetail;
