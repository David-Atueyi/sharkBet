import { useState } from "react";
import { useBetStore } from "../store/useBetStore";
import { useAccountBalance } from "../store/useAccountBalance";

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

  const { accountBalance, setAccountBalance } = useAccountBalance((state) => ({
    accountBalance: state.accountBalance,
    setAccountBalance: state.setAccountBalance,
  }));

  const totalOdds = selectedBetsArray
    .reduce((sum, bet) => sum + bet.odd, 0)
    .toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBetAmount(value);
    setError(
      value === ""
        ? "input an amount to be staked"
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

  bet < 10 || bet > 3000000
    ? setError("Amount must be between 10 to 3000000")
    : bet > balance
    ? setError("Insufficient balance. Top up")
    : (setAccountBalance(balance - bet), setBetAmount(""), clearSelectedBets());
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
