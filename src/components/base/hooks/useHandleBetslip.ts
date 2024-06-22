import { useState } from "react";
import { useBetStore } from "../store/useBetStore";
import { useAccountBalance } from "../store/useAccountBalance";
import { useTransactionHistoryStore } from "../store/useTransactionHistoryStore";
import { formattedDate } from "../funcs/date";
import { formattedTime } from "../funcs/time";
import { useActiveBetsStore } from "../store/useActiveBetsStore";
import { useUserIsActive } from "../store/useUserIsActive";
import { toast } from "sonner";

export const useHandleBetslip = () => {
  const [betTabs, setBetTabs] = useState<{ tabOne: boolean; tabTwo: boolean }>({
    tabOne: true,
    tabTwo: false,
  });
  const [betAmount, setBetAmount] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [confirmClearBet, setConfirmClearBet] = useState<boolean>(false);

  const { selectedBetsArray, clearSelectedBets } = useBetStore((state) => ({
    selectedBetsArray: state.selectedBetsArray,
    clearSelectedBets: state.clearSelectedBets,
  }));

  const { userIsActive } = useUserIsActive((state) => ({
    userIsActive: state.userIsActive,
  }));

  const { accountBalance, setAccountBalance } = useAccountBalance((state) => ({
    accountBalance: state.accountBalance,
    setAccountBalance: state.setAccountBalance,
  }));

  const { setTransactionHistory } = useTransactionHistoryStore((state) => ({
    setTransactionHistory: state.setTransactionHistory,
  }));

  const { setActiveBets } = useActiveBetsStore((state) => ({
    setActiveBets: state.setActiveBets,
  }));

  const totalOdds = selectedBetsArray.length > 0
    ? selectedBetsArray
        .filter(bet => typeof bet.odd === 'number') 
        .reduce((sum, bet) => sum + (bet.odd || 0), 0)
        .toFixed(2)
    : '0.00';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBetAmount(value);
    setError(
      value === ""
        ? "Input an amount to be staked"
        : parseInt(value) < 10 || parseInt(value) > 3000000
        ? `Amount must be between 10 to 3000000`
        : ""
    );
  };

  const potentialReturn = (
    parseFloat(betAmount) * parseFloat(totalOdds)
  ).toFixed(2);

  const placeBet = () => {
    const bet = Number(betAmount);
    const balance = Number(accountBalance);
    !userIsActive
      ? toast.error(
          "You are not signed in. Create an account if you don't have one."
        )
      : bet < 10 || bet > 3000000
      ? setError("Amount must be between 10 to 3000000")
      : bet > balance
      ? setError("Insufficient balance. Top up.")
      : (setAccountBalance(balance - bet),
        setBetAmount(""),
        clearSelectedBets(),
        setTransactionHistory(
          `-${betAmount}`,
          "Bet Placed",
          formattedDate,
          formattedTime,
          "successful"
        ),
        setActiveBets(
          selectedBetsArray,
          formattedDate,
          formattedTime,
          betAmount,
          Number(potentialReturn).toLocaleString()
        ));
  };

  return {
    betTabs,
    setBetTabs,
    error,
    confirmClearBet,
    setConfirmClearBet,
    handleInputChange,
    potentialReturn,
    placeBet,
    betAmount,
    totalOdds,
  };
};
