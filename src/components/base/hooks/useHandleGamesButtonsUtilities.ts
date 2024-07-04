import { toast } from "sonner";
import { useBetStore } from "../store/useBetStore";
import { useGetUserInfo } from "../store/useGetUserInfo";
import { deleteBetSlip } from "../utility/betSlip/deleteBetSlip";
import { insertBetSlip } from "../utility/betSlip/insertBetSlip";

export const useHandleGamesButtonsUtilities = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const userId = userInfo?.userId;

  const { setSelectedBet, selectedBetsArray } = useBetStore((state) => ({
    setSelectedBet: state.setSelectedBet,
    selectedBetsArray: state.selectedBetsArray,
  }));

  const { mutate: deleteSelectedBet } = deleteBetSlip();

  const isButtonClicked = (
    homeClub: string,
    awayClub: string,
    oddName: string | undefined,
    marketType: string | undefined
  ) => {
    return selectedBetsArray.some(
      (bet) =>
        bet.homeClub === homeClub &&
        bet.awayClub === awayClub &&
        bet.oddName === oddName &&
        bet.marketType === marketType
    );
  };

  const handleClick = (
    matchId: string,
    homeClub: string,
    awayClub: string,
    odd: number | undefined,
    marketType: string | undefined,
    oddName: string | undefined,
    date: string,
    time: string
  ) => {
    if (!userId) {
      toast.error(
        "You are not signed in. Create an account if you don't have one."
      );
    } else {
      setSelectedBet(
        matchId,
        homeClub,
        awayClub,
        odd,
        marketType,
        oddName,
        date,
        time
      );

      const betAlreadyInSlip = selectedBetsArray.some(
        (bet) =>
          bet.homeClub === homeClub &&
          bet.awayClub === awayClub &&
          bet.oddName === oddName &&
          bet.marketType === marketType
      );

      if (betAlreadyInSlip) {
        deleteSelectedBet({
          homeClub,
          awayClub,
          odd,
          marketType,
          oddName,
          date,
          time,
        });
      } else {
        insertBetSlip({
          matchId,
          homeClub,
          awayClub,
          odd,
          marketType,
          oddName,
          date,
          time,
          userId,
        });
      }
    }
  };

  return { isButtonClicked, handleClick };
};
