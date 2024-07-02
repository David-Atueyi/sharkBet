import supabase from "../../../../config/superBaseClient";

interface IGame {
  homeClub: string;
  awayClub: string;
  odd: number | undefined;
  marketType: string | undefined;
  oddName: string | undefined;
  date: string;
  time: string;
}

interface IDatas {
  totalStake: string;
  toReturn: string;
  userId: string;
  selectedBetsArray: IGame[];
}

export const insertMyBets = async ({
  totalStake,
  toReturn,
  userId,
  selectedBetsArray,
}: IDatas) => {
  const datas = {
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
  }));

  const { error: myBetsGamesError } = await supabase
    .from("myBetsGames")
    .insert(selectedBets);
  if (myBetsGamesError) throw myBetsGamesError;
};
