import { create } from "zustand";
import { IAccountBalanceVisibility } from "../interface/IAccountBalanceVisibility";

export const useAccountBalanceVisibility = create<IAccountBalanceVisibility>(
  (set) => ({
    accountBalanceVisibility: true,

    setAccountBalanceVisibility: (accountBalanceVisibility) =>
      set({
        accountBalanceVisibility,
      }),
  })
);
