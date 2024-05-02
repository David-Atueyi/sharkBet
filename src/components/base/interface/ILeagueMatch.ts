export interface ILeagueMatch {
  id: number;
  hotMatch: boolean;
  popularity?: number;
  game: string;
  country?: string;
  league: string;
  matchDate: {
    date: string;
    time: string;
  };
  teams: {
    home: {
      logo: string;
      name: string;
      market: {
        homeWin: { oddName: string; odd: number; marketType: string };
        homeOrDraw: { oddName: string; odd: number; marketType: string };
        homeDrawNoBet: { oddName: string; odd: number; marketType: string };
      };
    };
    away: {
      logo: string;
      name: string;
      market: {
        awayWin: { oddName: string; odd: number; marketType: string };
        drawOrWin: { oddName: string; odd: number; marketType: string };
        awayDrawNoBet: { oddName: string; odd: number; marketType: string };
      };
    };
  };
  generalMarkets: {
    fullTimeDraw: { oddName: string; odd: number; marketType: string };
    anyTeamToWin: { oddName: string; odd: number; marketType: string };
    overAndUnder: {
      overGoals: {
        [key: string]: { oddName: string; odd: number; marketType: string };
      };
      underGoals: {
        [key: string]: { oddName: string; odd: number; marketType: string };
      };
    };
    bothTeamsToScore: {
      Yes: { oddName: string; odd: number; marketType: string };
      No: { oddName: string; odd: number; marketType: string };
    };
  };
}
