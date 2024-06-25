import { create } from "zustand";

interface IBalance {
  balance: string;
  setBalance: (value: string) => void;
}

export const useHandleAccountBalance = create<IBalance>((set) => ({
  balance: "0.00",

  setBalance: (value) =>
    set(() => ({
      balance: value,
    })),
}));
