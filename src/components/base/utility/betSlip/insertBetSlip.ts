import supabase from "../../../../config/superBaseClient";

interface IDatas {
  homeClub: string;
  awayClub: string;
  odd: number | undefined;
  marketType: string | undefined;
  oddName: string | undefined;
  date: string;
  time: string;
  userId: string;
}

export const insertBetSlip = async ({
  homeClub,
  awayClub,
  odd,
  marketType,
  oddName,
  date,
  time,
  userId,
}: IDatas) => {
  const datas = {
    homeClub: homeClub,
    awayClub: awayClub,
    odd: odd,
    marketType: marketType,
    oddName: oddName,
    date: date,
    time: time,
    userId: userId,
  };
  const { data: betSlipData, error } = await supabase
    .from("betSlip")
    .insert([datas])
    .select();
  if (error) {
    console.log("an error occured while inserting bet slip", error);
  }
  console.log("successfully inserted bet slip" , betSlipData);
  
};
