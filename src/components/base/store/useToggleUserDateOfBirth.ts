import { create } from "zustand";
import { IToggleUserDateOfBirth } from "../interface/IToggleUserDateOfBirth";

export const useToggleUserDateOfBirth = create<IToggleUserDateOfBirth>((set) => ({
  toggleUserDateOfBirth: false,

  setToggleUserDateOfBirth: (value) =>
    set(() => ({
      toggleUserDateOfBirth: value,
    })),
}));
