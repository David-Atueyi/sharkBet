import { Link, useNavigate } from "react-router-dom";
import { useAccountBalanceVisibility } from "../../base/store/useAccountBalanceVisibility";
import { useUserInfoDropDownVisibility } from "../../base/store/useUserInfoDropDownVisibility";
import { ChevronRight } from "../Icons/ChevronRight";
import { EyeCloseIcon } from "../Icons/EyeCloseIcon";
import { EyeOpenIcon } from "../Icons/EyeOpenIcon";
import { GoodShield } from "../Icons/GoodShield";
import { XIcon } from "../Icons/XIcon";
import supabase from "../../../config/superBaseClient";
import { useUserIsActive } from "../../base/store/useUserIsActive";
import { toast } from "sonner";
import { useGetUserInfo } from "../../base/store/useGetUserInfo";
import { useHandleAccountBalance } from "../../base/store/useHandleAccountBalance";

export const UserInfoContent = () => {
  const redirect = useNavigate();

  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { accountBalanceVisibility, setAccountBalanceVisibility } =
    useAccountBalanceVisibility((state) => ({
      accountBalanceVisibility: state.accountBalanceVisibility,
      setAccountBalanceVisibility: state.setAccountBalanceVisibility,
    }));

  const { isVisible, setIsVisible } = useUserInfoDropDownVisibility(
    (state) => ({
      isVisible: state.isVisible,
      setIsVisible: state.setIsVisible,
    })
  );

  const { setUserIsActive } = useUserIsActive((state) => ({
    setUserIsActive: state.setUserIsActive,
  }));

  const { balance } = useHandleAccountBalance((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  const handleLogOut = async () => {
    setIsVisible(false, true);
    await supabase.auth.signOut();
    toast.success("You have been logged out successfully");
    redirect("/auth/log-in");
    setUserIsActive(false);
  };

  const formatBalance = (balance:string) => {
    return Number(balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  return (
    <div className="relative">
      <div className={`${isVisible ? "block" : "hidden"}`}>
        <div
          onClick={() => setIsVisible(false, true)}
          className="absolute bg-zinc-10/50 z-[2] -top-[60px] -right-4 w-[100vw] h-[100vh] flex pc:hidden justify-end"
        ></div>
        <div className="z-[3] absolute -top-[60px] pc:top-0 no-scrollbar -right-4 pc:right-0 h-[100dvh] pc:h-[50dvh] bg-zinc-8 pc:bg-zinc-1 flex flex-col justify-between text-zinc-1 pc:text-zinc-9 mobile:w-[80dvw] tablet:w-[60dvw] pc:w-[19dvw] py-1 overflow-y-scroll pc:rounded-[10px] pc:pt-4">
          <div>
            <div className="flex bg-zinc-9 pc:bg-zinc-1 px-[10px] pc:h-[30px]">
              <Link
                to={"/me/account-info"}
                onClick={() => setIsVisible(false, true)}
                className="flex gap-1 capitalize w-full items-center "
              >
                <p>hi,</p>
                <p>{userInfo.username}</p>
                <GoodShield extraStyle="pc:hidden" />
                <ChevronRight extraStyle="text-[12px] pc:hidden" />
              </Link>
              <XIcon
                textStyle="stroke-zinc-1 pc:stroke-zinc-9 pc:hidden"
                extraStyle="w-[30px] h-[30px] m-1"
                handleClick={() => setIsVisible(false, true)}
              />
            </div>
            <div className="px-[10px] pt-4 pc:pt-0 pb-2 pc:flex pc:justify-between pc:items-center">
              <div className="flex justify-between capitalize font-semibold pc:hidden">
                <div className="text-zinc-4 pc:text-zinc-9 flex gap-2 text-[15px]">
                  <p>
                    my balance <span className="pc:hidden">(NGN)</span>
                  </p>
                  <EyeOpenIcon
                    extraStyle={` ${
                      accountBalanceVisibility ? "block" : "hidden"
                    }`}
                    onClick={() => setAccountBalanceVisibility(false)}
                  />

                  <EyeCloseIcon
                    extraStyle={` ${
                      accountBalanceVisibility ? "hidden" : "block"
                    } `}
                    onClick={() => setAccountBalanceVisibility(true)}
                  />
                </div>
                <p className={`max-w-[70px] truncate`}>
                  {accountBalanceVisibility
                    ? formatBalance(balance)
                    : "******"}
                </p>
              </div>
              <div className="gap-1 mobile:hidden pc:flex text-[14px]">
                <p>NGN</p>
                <p className="max-w-[90px] truncate">
                  {accountBalanceVisibility
                    ? formatBalance(balance)
                    : "******"}
                </p>
                <EyeOpenIcon
                  extraStyle={`${
                    accountBalanceVisibility ? "block" : "hidden"
                  }`}
                  onClick={() => setAccountBalanceVisibility(false)}
                />

                <EyeCloseIcon
                  extraStyle={` ${
                    accountBalanceVisibility ? "hidden" : "block"
                  } `}
                  onClick={() => setAccountBalanceVisibility(true)}
                />
              </div>
              <Link
                to={"/me/deposit"}
                onClick={() => setIsVisible(false, true)}
                className="capitalize flex items-center justify-center bg-rose-5 pc:bg-blue-6 w-full pc:w-[40%] h-[40px] pc:h-[30px] rounded-full mt-5 pc:mt-0 font-bold pc:text-zinc-2"
              >
                deposit
              </Link>
            </div>
            <div
              onClick={() => setIsVisible(false, true)}
              className="text-[14px] flex flex-col gap-[1px] uppercase pc:border-y-4 pc:border-zinc-3"
            >
              <Link
                to={"/me/my-bets"}
                className="flex justify-between items-center p-2 bg-zinc-9 pc:bg-zinc-1 px-[13px]"
              >
                <p>my bets</p>
                <ChevronRight extraStyle="text-[14px]" />
              </Link>
              <Link
                to={"/me/transaction-history"}
                className="flex justify-between items-center p-2 bg-zinc-9 pc:bg-zinc-1 px-[13px]"
              >
                <p>my transactions</p>
                <ChevronRight extraStyle="text-[14px]" />
              </Link>
            </div>
          </div>
          <div className="px-[13px] pb-7 pc:pb-0 pc:px-0">
            <button
              onClick={handleLogOut}
              className="capitalize font-bold h-[40px] pc:h-[45px] w-full border-2 pc:border-0 pc:border-t-4  border-blue-7 pc:border-zinc-3 text-blue-6 pc:text-zinc-9 rounded-full pc:rounded-none"
            >
              log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
