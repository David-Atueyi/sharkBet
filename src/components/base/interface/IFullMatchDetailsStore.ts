import { Match } from "./IMatch";

export interface IFullMatchDetailsStore {
  fullMatchDetailsFound: Match ;

  setFullMatchDetailsFound: (matchFound: Match) => void;
}
