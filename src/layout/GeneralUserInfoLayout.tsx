import { Outlet } from "react-router-dom";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { UserInfoLeftSideSection } from "./UserInfoLeftSideSection";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useGetUserInfo } from "../components/base/store/useGetUserInfo";
import { useHandleAccountBalance } from "../components/base/store/useHandleAccountBalance";
import { getAccountBalance } from "../components/base/utility/accountBalance/getAccountBalance";

export const GeneralUserInfoLayout = () => {
  const { data: accountBalance = [] } = getAccountBalance();

  const { setUserInfo } = useGetUserInfo((state) => ({
    setUserInfo: state.setUserInfo,
    userInfo: state.userInfo,
  }));

  const { setBalance } = useHandleAccountBalance((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  useEffect(() => {
    setUserInfo();
  }, [setUserInfo]);

  useEffect(() => {
    if (accountBalance && accountBalance[0] && accountBalance[0].balance) {
      setBalance(accountBalance[0].balance);
    }
  }, [accountBalance, setBalance]);

  return (
    <div className="min-w-[320px] flex flex-col font-sharkBetFont max-w-[1200px] m-auto px-3">
      <GeneralHeaderLayout />
      <main className="flex-1 relative min-h-[69vh]">
        <div className="flex mt-4 gap-3 mobile:justify-center relative">
          <UserInfoLeftSideSection />
          <div className=" mobile:w-full tablet:w-[81%] pc:w-[80%]">
            <Outlet />
          </div>
        </div>
      </main>
      <GeneralFooterLayout />
      <Toaster closeButton={true} richColors />
    </div>
  );
};
