import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import DatePicker from 'react-datepicker';
import Select, { components } from 'react-select';
import Icon from 'components/Icons';
import { totalData } from 'constant/totalData';
import { useGlobalStore } from 'store';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.css';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/New_York');

const Control = ({ children, ...props }: any) => (
  <components.Control {...props}>
    <span className={styles.searchBarIcon}>
      <Icon type="search" />
    </span>{' '}
    {children}
  </components.Control>
);

const SearchBar = () => {
  const today = dayjs().format('YYYY-MM-DD');

  const [date, setDate] = useState(today);
  const currentCoordinate = useGlobalStore((state) => state.currentCoordinate);
  const setVariety = useGlobalStore((state) => state.setVariety);
  const setSelectedDate = useGlobalStore((state) => state.setSelectedDate);

  useEffect(() => {
    setVariety('Buttercrunch Lettuce');
  }, []);

  const plantNameOptions = totalData['Plant Information'].map((item) => {
    return { label: item.Variety, value: item.Variety };
  });

  const customSTyles = {
    control: (styles: any) => ({
      ...styles,
      height: '46px',
      borderRadius: '8px',
    }),
  };
  const handleChangeDate = (date: Date | null) => {
    const newDate = dayjs(date).format('YYYY-MM-DD');
    setDate(newDate);
  };

  useEffect(() => {
    setSelectedDate(dayjs(date).format('YYYY-MM-DD'));
  }, [date, setSelectedDate]);

  return (
    <div className="relative z-20 grid items-center grid-cols-3 gap-6 mb-10">
      <Select
        defaultValue={{ value: 'Buttercrunch Lettuce', label: 'Buttercrunch Lettuce' }}
        options={plantNameOptions}
        components={{ Control, IndicatorSeparator: () => null }}
        placeholder="Search Plant Name"
        styles={customSTyles}
        onChange={(newValue) => setVariety(newValue?.value ?? '')}
      />

      <div className="ml-8 text-center">
        <p className="text-lg ">Latitude and Longitude</p>
        <p className="text-lg font-medium">
          {`${currentCoordinate?.[1]?.toFixed(4)}, ${currentCoordinate?.[0]?.toFixed(4)}`}
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <DatePicker
          className="border border-gray-300 text-gray-900 rounded-lg block w-full pl-4 p-2.5 bg-white text-base focus-within:outline-none"
          selected={new Date(dayjs(date).toString())}
          onChange={(date) => handleChangeDate(date)}
          minDate={new Date(dayjs(totalData['Last Frost Date']).toString())}
          maxDate={new Date(dayjs(totalData['First Frost Date']).toString())}
          placeholderText="Select date"
        />
      </div>
    </div>
  );
};
export default SearchBar;
