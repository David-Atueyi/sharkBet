import { Match } from "../store/useMatchesFromDataBase";

export interface IFullMatchDetailsStore {
  fullMatchDetailsFound: Match ;

  setFullMatchDetailsFound: (matchFound: Match) => void;
}
