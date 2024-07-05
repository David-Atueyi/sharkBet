import { create } from "zustand";
import { IToggleResetPasswordDropDown } from "../interface/IToggleResetPasswordDropDown";

export const usetoggleResetPasswordDropDown =
  create<IToggleResetPasswordDropDown>((set) => ({
    toggleResetPasswordDropDown: false,

    setToggleResetPasswordDropDown: (value) =>
      set(() => ({
        toggleResetPasswordDropDown: value,
      })),
  }));
