import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type Shadow = {
  month: string;
  minutes: number;
  percentage: number;
};

type GlobalState = {
  shadowStore: Array<Shadow>;
  updateData: (data: Shadow) => void;
  currentCoordinate: Array<number>;
  setCoordinate: (coordinate: Array<number>) => void;
};

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist((set) => ({
      shadowStore: [],
      currentCoordinate: [],
      updateData: (newData) => {
        set((state) => ({
          shadowStore: state.shadowStore.some((item) => item.month === newData.month)
            ? [...state.shadowStore].map((item) => (item.month === newData.month ? newData : item))
            : [...state.shadowStore, newData],
        }));
      },
      setCoordinate: (coordinate) => {
        set(() => ({ currentCoordinate: coordinate }));
      },
    })),
  ),
);
