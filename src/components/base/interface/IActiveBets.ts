import { SelectedBet } from "./IBetStore";
export interface RemoveActiveBetsParams {
  date: string;
  time: string;
  totalStake: string;
}

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
