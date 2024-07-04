import { useEffect } from "react";
import { useActiveBetsStore } from "../store/useActiveBetsStore";
import { useBetStore } from "../store/useBetStore";
import { useGetUserInfo } from "../store/useGetUserInfo";
import { useHandleAccountBalance } from "../store/useHandleAccountBalance";
import { getAccountBalance } from "../utility/accountBalance/getAccountBalance";
import { getBetSlip } from "../utility/betSlip/getBetSlip";
import { getMyBets } from "../utility/myBets/getMyBets";

export const useSetDatasOnPageLoadUtilities = () => {
  const { setUserInfo } = useGetUserInfo((state) => ({
    setUserInfo: state.setUserInfo,
  }));

  const { setBalance } = useHandleAccountBalance((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  const { setSelectedBet } = useBetStore((state) => ({
    setSelectedBet: state.setSelectedBet,
  }));

  const { setActiveBets } = useActiveBetsStore((state) => ({
    setActiveBets: state.setActiveBets,
    activeBets: state.activeBets,
  }));

  const { data: accountBalance = [] } = getAccountBalance();

  const { data: betSlipData = [] } = getBetSlip();

  const { data: myBets = [] } = getMyBets();

  useEffect(() => {
    setUserInfo();
  }, [setUserInfo]);

  useEffect(() => {
    if (accountBalance && accountBalance[0] && accountBalance[0].balance) {
      setBalance(accountBalance[0].balance);
    }
  }, [accountBalance, setBalance]);

  useEffect(() => {
    if (betSlipData && betSlipData[0]) {
      betSlipData.forEach((betSlip) =>
        setSelectedBet(
          betSlip.matchId,
          betSlip.homeClub,
          betSlip.awayClub,
          betSlip.odd,
          betSlip.marketType,
          betSlip.oddName,
          betSlip.date,
          betSlip.time
        )
      );
    }
  }, [betSlipData, setSelectedBet]);

  useEffect(() => {
    if (myBets && myBets[0]) {
      myBets.forEach((myBet) => {
        setActiveBets(
          myBet.myBetsGames,
          myBet.date,
          myBet.time,
          myBet.totalStake,
          myBet.toReturn
        );
      });
    }
  }, [myBets, setActiveBets]);
};
