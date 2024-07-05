import { useState } from "react";
import { useBetStore } from "../store/useBetStore";
import { useActiveBetsStore } from "../store/useActiveBetsStore";
import { useUserIsActive } from "../store/useUserIsActive";
import { toast } from "sonner";
import { insertTransactionsDatas } from "../utility/transactionUtilities/insertTransactionsDatas";
import { formattedDate } from "../funcs/date";
import { formattedTime } from "../funcs/time";
import { useGetUserInfo } from "../store/useGetUserInfo";
import { updateUserAccountBalance } from "../utility/accountBalance/updateUserAccountBalance";
import { getAccountBalance } from "../utility/accountBalance/getAccountBalance";
import { useHandleAccountBalance } from "../store/useHandleAccountBalance";
import { deleteBetSlip } from "../utility/betSlip/deleteBetSlip";
import { insertMyBets } from "../utility/myBets/insertMyBets";

export const useHandleBetslip = () => {
  const [betTabs, setBetTabs] = useState<{ tabOne: boolean; tabTwo: boolean }>({
    tabOne: true,
    tabTwo: false,
  });
  const [betAmount, setBetAmount] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [confirmClearBet, setConfirmClearBet] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const { selectedBetsArray, clearSelectedBets } = useBetStore((state) => ({
    selectedBetsArray: state.selectedBetsArray,
    clearSelectedBets: state.clearSelectedBets,
  }));

  const { userIsActive } = useUserIsActive((state) => ({
    userIsActive: state.userIsActive,
  }));

  const { data: accountBalance } = getAccountBalance();

  const { setActiveBets } = useActiveBetsStore((state) => ({
    setActiveBets: state.setActiveBets,
  }));

  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { setBalance } = useHandleAccountBalance((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  const { mutate: updateAccountBalance } = updateUserAccountBalance();

  const { mutate: deleteSelectedBet } = deleteBetSlip();

  const totalOdds =
    selectedBetsArray.length > 0
      ? selectedBetsArray
          .filter((bet) => typeof bet.odd === "number")
          .reduce((sum, bet) => sum + (bet.odd || 0), 0)
          .toFixed(2)
      : "0.00";

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
    const balance =
      accountBalance && accountBalance[0]
        ? Number(accountBalance[0].balance)
        : Number("0.00");
    const newBalance = balance - bet;

    if (!userIsActive) {
      toast.error(
        "You are not signed in. Create an account if you don't have one."
      );
    } else if (bet < 10 || bet > 3000000) {
      setError("Amount must be between 10 to 3000000");
    } else if (bet > balance) {
      setError("Insufficient balance. Top up.");
    } else {
      setIsLoading(true)
      setTimeout(() => {
        updateAccountBalance(newBalance.toString());
        setActiveBets(
          selectedBetsArray,
          formattedDate,
          formattedTime,
          betAmount,
          Number(potentialReturn).toLocaleString()
        );
        insertMyBets({
          date: formattedDate,
          time: formattedTime,
          totalStake: betAmount,
          toReturn: potentialReturn,
          userId: userInfo.userId,
          selectedBetsArray,
        });
        setBalance(newBalance.toString());
        setBetAmount("");
        clearSelectedBets();
        deleteSelectedBet(null);
        insertTransactionsDatas({
          transactionType: "Bet Placed",
          amount: `-${betAmount}`,
          transactionStatus: "successful",
          userId: userInfo.userId,
        });
        toast.success("Bet Placed Successfully")
        setIsLoading(false)
      }, 2000);
    }
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
    isLoading
  };
};
