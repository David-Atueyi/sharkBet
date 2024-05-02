import { create } from "zustand";

interface IUseGameUtilities {
  activeLeagueIndex: number;
  setActiveLeagueIndex: (index: number) => void;
}

export const useGamesUtilities = create<IUseGameUtilities>((set) => ({
  activeLeagueIndex: 0,

  setActiveLeagueIndex: (index) =>
    set({
      activeLeagueIndex: index,
    }),
}));
