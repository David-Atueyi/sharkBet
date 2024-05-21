import { SelectedBet } from "./IBetStore";

export interface IActiveBets {
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