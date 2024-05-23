import { UserIcon } from "../Icons/UserIcon";
import { Link } from "react-router-dom";
import { DocumentIcon } from "../Icons/DocumentIcon";
import { EyeOpenIcon } from "../Icons/EyeOpenIcon";
import { EyeCloseIcon } from "../Icons/EyeCloseIcon";
import { ChevronUp } from "../Icons/ChevronUp";
import { UserInfoContent } from "../DropDownContent/UserInfoContent";
import { useUserInfoDropDownVisibility } from "../../base/store/useUserInfoDropDownVisibility";
import { useAccountBalanceVisibility } from "../../base/store/useAccountBalanceVisibility";
import { useAccountBalance } from "../../base/store/useAccountBalance";
import { useActiveBetsStore } from "../../base/store/useActiveBetsStore";
import { useUserIsActive } from "../../base/store/useUserIsActive";

export const UserInfoDropDown = () => {
  const { accountBalanceVisibility, setAccountBalanceVisibility } =
    useAccountBalanceVisibility((state) => ({
      accountBalanceVisibility: state.accountBalanceVisibility,
      setAccountBalanceVisibility: state.setAccountBalanceVisibility,
    }));

  const { setIsVisible, isVisible } = useUserInfoDropDownVisibility(
    (state) => ({
      setIsVisible: state.setIsVisible,
      isVisible: state.isVisible,
    })
  );

  const { activeBets } = useActiveBetsStore((state) => ({
    activeBets: state.activeBets,
  }));

  const { accountBalance } = useAccountBalance((state) => ({
    accountBalance: state.accountBalance,
  }));

  const { userIsActive } = useUserIsActive((state) => ({
    userIsActive: state.userIsActive,
  }));

  console.log(userIsActive);
  

  return (
    <>
      {userIsActive && (
        <div className={`pr-1 gap-4 flex pc:hidden`}>
          <Link
            to={"/me/my-bets"}
            className="relative capitalize flex flex-col items-center text-blue-6 font-bold mobile:text-[12px] tablet:text-[16px]"
          >
            <div
              className={`px-[10px] pb-[10px] pt-[11px] absolute -top-[10px] right-[3px] bg-blue-6 w-[17px] h-[17px] rounded-full text-zinc-3 flex justify-center items-center ${
                activeBets.length > 0 ? "block" : "hidden"
              }`}
            >
              <p>{activeBets.length}</p>
            </div>
            <DocumentIcon />
            <p className="leading-4">my bets</p>
          </Link>

          <div>
            <button
              onClick={() => setIsVisible(true, true)}
              className="flex flex-col items-center capitalize text-blue-6 font-bold mobile:text-[12px] tablet:text-[16px]"
            >
              <UserIcon />
              <p className="leading-4 truncate w-[48px] tablet:w-[100px]">
                <span>&#x20A6;</span> <span>{accountBalance}</span>
              </p>
            </button>
            <UserInfoContent />
          </div>
        </div>
      )}

      {/*  */}
      {userIsActive && (
        <div
          className={` items-center gap-2 capitalize text-blue-6 font-bold mobile:hidden pc:flex`}
        >
          <div className="flex gap-1">
            <p>NGN</p>
            <p>
              {accountBalanceVisibility
                ? accountBalance.toLocaleString()
                : "******"}
            </p>
            <EyeOpenIcon
              extraStyle={`${accountBalanceVisibility ? "block" : "hidden"}`}
              onClick={() => setAccountBalanceVisibility(false)}
            />

            <EyeCloseIcon
              extraStyle={` ${accountBalanceVisibility ? "hidden" : "block"} `}
              onClick={() => setAccountBalanceVisibility(true)}
            />
          </div>
          |
          <Link to={"/me/deposit"}>
            <p>deposit</p>
          </Link>
          |
          <Link to={"/me/my-bets"} className="flex gap-1">
            <p>my bets</p>
            <div className={`${activeBets.length > 0 ? "block" : "hidden"}`}>
              <p>({activeBets.length})</p>
            </div>
          </Link>
          |
          <div>
            <button
              onClick={() =>
                !isVisible
                  ? setIsVisible(true, false)
                  : setIsVisible(false, true)
              }
              className="flex items-center justify-center capitalize"
            >
              <p>my Account</p>
              <ChevronUp
                extraStyle={`text-[12px] pt-[5px] ${
                  isVisible ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <UserInfoContent />
          </div>
        </div>
      )}
    </>
  );
};
