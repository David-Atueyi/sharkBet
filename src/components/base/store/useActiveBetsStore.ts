import { create } from "zustand";
import { IActiveBets } from "../interface/IActiveBets";

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
