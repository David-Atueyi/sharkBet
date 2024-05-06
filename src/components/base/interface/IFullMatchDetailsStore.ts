import { ILeagueMatch } from "./ILeagueMatch";

export interface IFullMatchDetailsStore {
  fullMatchDetailsFound: ILeagueMatch;

  setFullMatchDetailsFound: (matchFound: ILeagueMatch) => void;
}
