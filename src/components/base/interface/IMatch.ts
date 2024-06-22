interface BothTeamsToScore {
  id: string;
  noOdd: number;
  yesOdd: number;
  noOddName: string;
  created_at: string;
  yesOddName: string;
  noMarketType: string;
  yesMarketType: string;
  generalMarketsId: string;
}

interface FullTimeResult {
  id: string;
  created_at: string;
  anyTeamToWinOdd: number;
  fullTimeDrawOdd: number;
  generalMarketsId: string;
  anyTeamToWinOddName: string;
  fullTimeDrawOddName: string;
  anyTeamToWinMarketType: string;
  fullTimeDrawMarketType: string;
}

interface OverUnder {
  id: string;
  created_at: string;
  generalMarketsId: string;
  overOnePointFiveOdd?: number;
  overTwoPointFiveOdd?: number;
  overZeroPointFiveOdd?: number;
  overThreePointFiveOdd?: number;
  overOnePointFiveOddName?: string;
  overTwoPointFiveOddName?: string;
  overZeroPointFiveOddName?: string;
  overThreePointFiveOddName?: string;
  overOnePointFiveMarketType?: string;
  overTwoPointFiveMarketType?: string;
  overZeroPointFiveMarketType?: string;
  overThreePointFiveMarketType?: string;
  underOnePointFiveOdd?: number;
  underTwoPointFiveOdd?: number;
  underZeroPointFiveOdd?: number;
  underThreePointFiveOdd?: number;
  underOnePointFiveOddName?: string;
  underTwoPointFiveOddName?: string;
  underZeroPointFiveOddName?: string;
  underThreePointFiveOddName?: string;
  underOnePointFiveMarketType?: string;
  underTwoPointFiveMarketType?: string;
  underZeroPointFiveMarketType?: string;
  underThreePointFiveMarketType?: string;
}

interface GeneralMarket {
  overs: OverUnder[];
  unders: OverUnder[];
  fullTimeResult: FullTimeResult[];
  bothTeamsToScore: BothTeamsToScore[];
}

interface TeamsOdds {
  id: string;
  marketId: string;
  awayOdd1x2: number;
  awayOddDnb: number;
  created_at: string;
  homeOdd1x2: number;
  homeOddDnb: number;
  awayOddName1x2: string;
  awayOddNameDnb: string;
  homeOddName1x2: string;
  homeOddNameDnb: string;
  awayMarketType1x2: string;
  awayMarketTypeDnb: string;
  homeMarketType1x2: string;
  homeMarketTypeDnb: string;
  awayOddDoubleChance: number;
  homeOddDoubleChance: number;
  awayOddNameDoubleChance: string;
  homeOddNameDoubleChance: string;
  awayMarketTypeDoubleChance: string;
  homeMarketTypeDoubleChance: string;
}

interface Market {
  teamsOdds: TeamsOdds[];
  generalMarkets: GeneralMarket[];
}

export interface Match {
  id: string;
  createdAt: string;
  hotMatch: boolean;
  popularity: number;
  game: string;
  country: string;
  league: string;
  date: string;
  time: string;
  homeTeamLogo: string;
  homeTeamName: string;
  awayTeamLogo: string;
  awayTeamName: string;
  market: Market[];
}