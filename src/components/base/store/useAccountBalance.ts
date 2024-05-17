import { create } from "zustand";

interface IUseAccountBalance {
  accountBalance: number | string;
  setAccountBalance: (accountBalance: number) => void;
}

export const useAccountBalance = create<IUseAccountBalance>((set) => ({
  accountBalance: "0.00",

  setAccountBalance: (accountBalance) =>
    set({
      accountBalance: accountBalance,
    }),
}));
