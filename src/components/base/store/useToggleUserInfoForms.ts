import { create } from "zustand";

interface ToggleUserInfoFormsState {
  toggleUserInfoForms: {
    user_name: boolean;
    password: boolean;
    date_of_birth: boolean;
  };
  setToggleUserInfoForms: (
    forms: Partial<ToggleUserInfoFormsState["toggleUserInfoForms"]>
  ) => void;
}

export const useToggleUserInfoForms = create<ToggleUserInfoFormsState>(
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
