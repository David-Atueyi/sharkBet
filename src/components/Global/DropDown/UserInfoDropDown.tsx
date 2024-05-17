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

  const { accountBalance } = useAccountBalance((state) => ({
    accountBalance: state.accountBalance,
  }));

  return (
    <>
      <div className="pr-1 flex gap-4 pc:hidden">
        <Link
          to={"/me/my-bets"}
          className="capitalize flex flex-col items-center text-blue-6 font-bold mobile:text-[12px] tablet:text-[16px]"
        >
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
      {/*  */}
      <div className=" items-center gap-2 capitalize text-blue-6 font-bold mobile:hidden pc:flex  ">
        <div className="flex gap-1">
          <p>NGN</p>
          <p>{accountBalanceVisibility ? accountBalance.toLocaleString() : "******"}</p>
          <EyeOpenIcon
            extraStyle={`${accountBalanceVisibility ? "block" : "hidden"}`}
            onClick={() => setAccountBalanceVisibility(false)}
          />

          <EyeCloseIcon
            extraStyle={` ${accountBalanceVisibility ? "hidden" : "block"} `}
            onClick={() => setAccountBalanceVisibility(true)}
          />
        </div>
        |<Link to={"/me/deposit"}>deposit</Link>|
        <Link to={"/me/my-bets"}>my bets</Link>|
        <div>
          <button
            onClick={() =>
              !isVisible ? setIsVisible(true, false) : setIsVisible(false)
            }
            className="flex items-center justify-center capitalize"
          >
            <p>my Account</p>{" "}
            <ChevronUp
              extraStyle={`text-[12px] pt-[5px] ${
                isVisible ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <UserInfoContent />
        </div>
      </div>
    </>
  );
};