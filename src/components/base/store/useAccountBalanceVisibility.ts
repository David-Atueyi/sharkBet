import { create } from "zustand";

interface IAccountBalanceVisibility {
  accountBalanceVisibility: boolean;
  setAccountBalanceVisibility: (accountBalanceVisibility: boolean) => void;
}

export const useAccountBalanceVisibility = create<IAccountBalanceVisibility>(
  (set) => ({
    accountBalanceVisibility: true,

    setAccountBalanceVisibility: (accountBalanceVisibility) =>
      set({
        accountBalanceVisibility,
      }),
  })
);
