import { create } from "zustand";
import { IUseGameUtilities } from "../interface/IUseGameUtilities";

export const useGamesUtilities = create<IUseGameUtilities>((set) => ({
  activeLeagueIndex: 0,

  setActiveLeagueIndex: (index) =>
    set({
      activeLeagueIndex: index,
    }),
}));
