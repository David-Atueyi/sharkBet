import { create } from "zustand";
import { IToggleResetPassword } from "../interface/IToggleResetPassword";

export const usetoggleResetPassword = create<IToggleResetPassword>((set) => ({
  toggleResetPassword: false,

  setToggleResetPassword: (value) =>
    set(() => ({
      toggleResetPassword: value,
    })),
}));
