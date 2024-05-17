import { create } from "zustand";

interface transactionHistory {
  transactionAmount: number;
  transactionType: string;
  transactionDate: string;
  transactionTime: string;
  transactionStatus: string;
}

interface IUseTransactionHistoryStore {
  transactionHistory: transactionHistory[];
  setTransactionHistory: (
    transactionAmount: number,
    transactionType: string,
    transactionDate: string,
    transactionTime: string,
    transactionStatus: string
  ) => void;
}

export const useTransactionHistoryStore = create<IUseTransactionHistoryStore>(
  (set) => ({
    transactionHistory: [],

    setTransactionHistory: (
      transactionAmount,
      transactionType,
      transactionDate,
      transactionTime,
      transactionStatus
    ) =>
      set((state) => ({
        transactionHistory: [
          ...state.transactionHistory,
          {
            transactionAmount,
            transactionType,
            transactionDate,
            transactionTime,
            transactionStatus,
          },
        ],
      })),
  })
);