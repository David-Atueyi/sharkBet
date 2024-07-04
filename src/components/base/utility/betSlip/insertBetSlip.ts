import { toast } from "sonner";
import supabase from "../../../../config/superBaseClient";
import { SelectedBet } from "../../interface/IBetStore";

export const insertBetSlip = async ({
  matchId,
  homeClub,
  awayClub,
  odd,
  marketType,
  oddName,
  date,
  time,
  userId,
}: SelectedBet) => {
  const datas = {
    matchId: matchId,
    homeClub: homeClub,
    awayClub: awayClub,
    odd: odd,
    marketType: marketType,
    oddName: oddName,
    date: date,
    time: time,
    userId: userId,
  };
  const { error } = await supabase
    .from("betSlip")
    .insert([datas])
    .select();
  if (error) {
    toast.error("An error occured while adding a bet to your bet slip, check your internet connection and reload");
  }
  
};
