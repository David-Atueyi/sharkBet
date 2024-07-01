export interface SelectedBet {
  homeClub: string;
  awayClub: string;
  odd: number|undefined;
  marketType: string|undefined;
  oddName: string|undefined;
  date:string;
  time: string;
}

export interface IBetStore {
  selectedBetsArray: SelectedBet[];
  setSelectedBet: (
    homeClub: string,
    awayClub: string,
    odd: number|undefined,
    marketType: string|undefined,
    oddName: string|undefined,
    date: string,
    time: string,
  ) => void;
  removeSelectedBet: (index: number) => void;
  clearSelectedBets: () => void;
}
