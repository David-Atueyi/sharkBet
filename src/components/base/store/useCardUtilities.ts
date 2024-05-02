import { create } from "zustand";


interface ICardUtility {
  hover: boolean;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  updateHover: () => void;
  resetHover: () => void;
}

export const useCardUtilities = create<ICardUtility>((set) => ({
  hover: false,
  activeIndex: 0,
  updateHover: () =>
    set({
      hover: true,
    }),
  resetHover: () =>
    set({
      hover: false,
    }),
  setActiveIndex: (index) =>
    set({
      activeIndex: index,
    }),
}));
