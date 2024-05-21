import { create } from "zustand";
import { IToggleUserInfoFormsState } from "../interface/IToggleUserInfoFormsState";

export const useToggleUserInfoForms = create<IToggleUserInfoFormsState>(
  (set) => ({
    toggleUserInfoForms: {
      user_name: false,
      password: false,
      date_of_birth: false,
    },
    setToggleUserInfoForms: (forms) =>
      set((state) => ({
        toggleUserInfoForms: { ...state.toggleUserInfoForms, ...forms },
      })),
  })
);
