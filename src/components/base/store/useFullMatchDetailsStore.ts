import { create } from "zustand";
import { IFullMatchDetailsStore } from "../interface/IFullMatchDetailsStore";
import { ILeagueMatch } from "../interface/ILeagueMatch";

const initialState = {
  fullMatchDetailsFound: {
    id: 0,
    hotMatch: false,
    game: "",
    country: "",
    league: "",
    matchDate: {
      date: "",
      time: "",
    },
    teams: {
      home: {
        logo: "",
        name: "",
        market: {
          homeWin: { oddName: "", odd: 0, marketType: "" },
          homeOrDraw: {
            oddName: "",
            odd: 1.14,
            marketType: "",
          },
          homeDrawNoBet: {
            oddName: "",
            odd: 0,
            marketType: "",
          },
        },
      },
      away: {
        logo: "",
        name: "",
        market: {
          awayWin: { oddName: "", odd: 0, marketType: "" },
          drawOrWin: {
            oddName: "",
            odd: 1.65,
            marketType: "",
          },
          awayDrawNoBet: {
            oddName: "",
            odd: 0,
            marketType: "",
          },
        },
      },
    },

    generalMarkets: {
      fullTimeDraw: {
        oddName: "",
        odd: 0,
        marketType: "",
      },
      anyTeamToWin: {
        oddName: "",
        odd: 0,
        marketType: "",
      },
      overAndUnder: {
        overGoals: {
          "0.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
          "1.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
          "2.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
          "3.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
        },
        underGoals: {
          "0.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
          "1.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
          "2.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
          "3.5": {
            oddName: "",
            odd: 0,
            marketType: "",
          },
        },
      },
      bothTeamsToScore: {
        Yes: { oddName: "", odd: 0, marketType: "" },
        No: { oddName: "", odd: 0, marketType: "" },
      },
    },
  },
};

export const useFullMatchDetailsStore = create<IFullMatchDetailsStore>((set) => ({
  ...initialState,

  setFullMatchDetailsFound: (matchFound: ILeagueMatch) =>
    set((state) => ({
      ...state,
      fullMatchDetailsFound: matchFound,
    })),
}));
