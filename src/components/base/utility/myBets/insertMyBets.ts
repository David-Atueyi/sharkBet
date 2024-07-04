import supabase from "../../../../config/superBaseClient";
import { SelectedBet } from "../../interface/IBetStore";

interface IDatas {
  date: string;
  time: string;
  totalStake: string;
  toReturn: string;
  userId: string;
  selectedBetsArray: SelectedBet[];
}

export const insertMyBets = async ({
  date,
  time,
  totalStake,
  toReturn,
  userId,
  selectedBetsArray,
}: IDatas) => {
  const datas = {
    date: date,
    time: time,
    totalStake: totalStake,
    toReturn: toReturn,
    userId: userId,
  };

  const { data: myBets, error: myBetsError } = await supabase
    .from("myBets")
    .insert([datas])
    .select("id");
  if (myBetsError) throw myBetsError;

  const myBetsId = myBets[0].id;

  const selectedBets = selectedBetsArray.map((selectedBet) => ({
    homeClub: selectedBet.homeClub,
    awayClub: selectedBet.awayClub,
    odd: selectedBet.odd,
    marketType: selectedBet.marketType,
    oddName: selectedBet.oddName,
    date: selectedBet.date,
    time: selectedBet.time,
    myBetsId: myBetsId,
    matchId: selectedBet.matchId,
  }));

  const { error: myBetsGamesError } = await supabase
    .from("myBetsGames")
    .insert(selectedBets);
  if (myBetsGamesError) throw myBetsGamesError;
};
