import { create } from "zustand";
import { IUseTransactionHistoryStore } from "../interface/IUseTransactionHistoryStore";

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
