import { create } from "zustand";

interface IUserIsActive {
  userIsActive: boolean;
  setUserIsActive: (value:boolean) => void;
}

export const useUserIsActive = create<IUserIsActive>((set) => ({
  userIsActive: false,
  setUserIsActive: (value) =>
    set({
      userIsActive: value,
    }),
 
}));