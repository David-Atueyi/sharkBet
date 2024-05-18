import { create } from "zustand";
import { SelectedBet } from "../interface/IBetStore";

interface IActiveBets {
  activeBets: {
    selectedMatches: SelectedBet[];
    date: string;
    time: string;
    amount: string;
    toReturn: string;
  }[];
  setActiveBets: (
    selectedMatches: SelectedBet[],
    date: string,
    time: string,
    amount: string,
    toReturn: string
  ) => void;
  removeActiveBet: (date: string, time: string, amount: string) => void;
}

export const useActiveBetsStore = create<IActiveBets>((set) => ({
  activeBets: [],

  setActiveBets: (selectedMatches, date, time, amount, toReturn) => {
    set((state) => ({
      activeBets: [
        ...state.activeBets,
        { selectedMatches, date, time, amount, toReturn },
      ],
    }));
  },

  removeActiveBet: (date, time, amount) => {
    set((state) => ({
      activeBets: state.activeBets.filter(
        (bet) => bet.date !== date || bet.time !== time || bet.amount !== amount
      ),
    }));
  },
}));
