import { create } from "zustand";
import { IFullMatchDetailsStore } from "../interface/IFullMatchDetailsStore";
import { Match } from "./useMatchesFromDataBase";

const initialState = {
  fullMatchDetailsFound: {
    id: "",
    createdAt: "",
    hotMatch: false,
    popularity: 0,
    game: "",
    country: "",
    league: "",
    date: "",
    time: "",
    homeTeamLogo: "",
    homeTeamName: "",
    awayTeamLogo: "",
    awayTeamName: "",
    market: [
      {
        teamsOdds: [
          {
            id: "",
            marketId: "",
            awayOdd1x2: 0,
            awayOddDnb: 0,
            created_at: "",
            homeOdd1x2: 0,
            homeOddDnb: 0,
            awayOddName1x2: "",
            awayOddNameDnb: "",
            homeOddName1x2: "",
            homeOddNameDnb: "",
            awayMarketType1x2: "",
            awayMarketTypeDnb: "",
            homeMarketType1x2: "",
            homeMarketTypeDnb: "",
            awayOddDoubleChance: 0,
            homeOddDoubleChance: 0,
            awayOddNameDoubleChance: "",
            homeOddNameDoubleChance: "",
            awayMarketTypeDoubleChance: "",
            homeMarketTypeDoubleChance: "",
          },
        ],
        generalMarkets: [
          {
            overs: [
              {
                id: "",
                created_at: "",
                generalMarketsId: "",
                overOnePointFiveOdd: 0,
                overTwoPointFiveOdd: 0,
                overZeroPointFiveOdd: 0,
                overThreePointFiveOdd: 0,
                overOnePointFiveOddName: "",
                overTwoPointFiveOddName: "",
                overZeroPointFiveOddName: "",
                overThreePointFiveOddName: "",
                overOnePointFiveMarketType: "",
                overTwoPointFiveMarketType: "",
                overZeroPointFiveMarketType: "",
                overThreePointFiveMarketType: "",
              },
            ],
            unders: [
              {
                id: "",
                created_at: "",
                generalMarketsId: "",
                underOnePointFiveOdd: 0,
                underTwoPointFiveOdd: 0,
                underZeroPointFiveOdd: 0,
                underThreePointFiveOdd: 0,
                underOnePointFiveOddName: "",
                underTwoPointFiveOddName: "",
                underZeroPointFiveOddName: "",
                underThreePointFiveOddName: "",
                underOnePointFiveMarketType: "",
                underTwoPointFiveMarketType: "",
                underZeroPointFiveMarketType: "",
                underThreePointFiveMarketType: "",
              },
            ],
            fullTimeResult: [
              {
                id: "",
                created_at: "",
                anyTeamToWinOdd: 0,
                fullTimeDrawOdd: 0,
                generalMarketsId: "",
                anyTeamToWinOddName: "",
                fullTimeDrawOddName: "",
                anyTeamToWinMarketType: "",
                fullTimeDrawMarketType: "",
              },
            ],
            bothTeamsToScore: [
              {
                id: "",
                noOdd: 0,
                yesOdd: 0,
                noOddName: "",
                created_at: "",
                yesOddName: "",
                noMarketType: "",
                yesMarketType: "",
                generalMarketsId: "",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const useFullMatchDetailsStore = create<IFullMatchDetailsStore>(
  (set) => ({
    ...initialState,

    setFullMatchDetailsFound: (matchFound: Match) =>
      set((state) => ({
        ...state,
        fullMatchDetailsFound: matchFound,
      })),
  })
);
