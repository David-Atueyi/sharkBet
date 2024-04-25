export interface ILeagueMatch {
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
        homeWin: number;
        homeOrDraw: number;
        homeDrawNoBet: number;
      };
    };
    away: {
      logo: string;
      name: string;
      market: {
        awayWin: number;
        drawOrWin: number;
        awayDrawNoBet: number;
      };
    };
  };
  generalMarkets: {
    fullTimeDraw: number;
    anyTeamToWin: number;
    overAndUnder: {
      overGoals: {
        [key: string]: {
          name: string;
          odd: number;
        };
      };
      underGoals: {
        [key: string]: {
          name: string;
          odd: number;
        };
      };
    };
    bothTeamsToScore: {
      Yes: number;
      No: number;
    };
  };
}
