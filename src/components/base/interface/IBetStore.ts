export interface SelectedBet {
  matchId?: string;
  homeClub: string;
  awayClub: string;
  odd: number | undefined;
  marketType: string | undefined;
  oddName: string | undefined;
  date: string;
  time: string;
  userId?: string;
}

export interface IBetStore {
  selectedBetsArray: SelectedBet[];
  setSelectedBet: (
    matchId: string | undefined,
    homeClub: string,
    awayClub: string,
    odd: number | undefined,
    marketType: string | undefined,
    oddName: string | undefined,
    date: string,
    time: string
  ) => void;
  removeSelectedBet: (index: number) => void;
  clearSelectedBets: () => void;
}
