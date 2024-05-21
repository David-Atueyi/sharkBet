import { create } from "zustand";
import { ICardUtility } from "../interface/ICardUtility";

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
