import { create } from "zustand";
import { IBetStore } from "../interface/IBetStore";

const initialState = {
  selectedBetsArray: [],
};

export const useBetStore = create<IBetStore>((set) => ({
  ...initialState,

  setSelectedBet: (id,homeClub, awayClub, odd, marketType, oddName, date, time) =>
    set((state) => {
      const existingBetIndex = state.selectedBetsArray.findIndex(
        (bet) =>
          bet.id === id &&
          bet.homeClub === homeClub &&
          bet.awayClub === awayClub &&
          bet.odd === odd &&
          bet.marketType === marketType &&
          bet.oddName === oddName &&
          bet.date === date &&
          bet.time === time
      );

      if (existingBetIndex !== -1) {
        const updatedBetsArray = [...state.selectedBetsArray];
        updatedBetsArray.splice(existingBetIndex, 1);
        return { selectedBetsArray: updatedBetsArray };
      } else {
        return {
          selectedBetsArray: [
            ...state.selectedBetsArray,
            {
              id,
              homeClub,
              awayClub,
              odd,
              marketType,
              oddName,
              date,
              time,
            },
          ],
        };
      }
    }),

  removeSelectedBet: (index) =>
    set((state) => {
      const updatedBetsArray = [...state.selectedBetsArray];
      updatedBetsArray.splice(index, 1);
      return { selectedBetsArray: updatedBetsArray };
    }),

  clearSelectedBets: () => set(() => ({ selectedBetsArray: [] })),
}));
