// IBetStore.ts
export interface SelectedBet {
  homeClub: string;
  awayClub: string;
  odd: number;
  marketType: string;
  oddName: string;
  date:string;
  time: string;
}

export interface IBetStore {
  selectedBetsArray: SelectedBet[];
  setSelectedBet: (
    homeClub: string,
    awayClub: string,
    odd: number,
    marketType: string,
    oddName: string,
    date: string,
    time: string,
  ) => void;
  removeSelectedBet: (index: number) => void;
  clearSelectedBets: () => void;
}
