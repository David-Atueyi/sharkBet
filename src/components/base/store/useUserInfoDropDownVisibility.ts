import { create } from "zustand";

interface IDropDownVisibility {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean, applyOverflow?: boolean) => void;
}

export const useUserInfoDropDownVisibility = create<IDropDownVisibility>((set) => ({
  isVisible: false,

  setIsVisible: (isVisible: boolean, applyOverflow?: boolean) => {
    set({ isVisible });
    if (applyOverflow) {
      if (isVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  },
}));
