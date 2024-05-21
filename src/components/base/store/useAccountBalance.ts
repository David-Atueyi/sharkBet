import { create } from "zustand";
import { IUseAccountBalance } from "../interface/IUseAccountBalance";

export const useAccountBalance = create<IUseAccountBalance>((set) => ({
  accountBalance: "0.00",

  setAccountBalance: (accountBalance) =>
    set({
      accountBalance: accountBalance,
    }),
}));
