// IBetStore.ts
export interface SelectedBet {
  id:number
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
    id:number,
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
