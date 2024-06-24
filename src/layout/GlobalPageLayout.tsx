import { Outlet, useLocation } from "react-router-dom";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { BetSlipMobileAndTabletView } from "../components/Global/BetSlip/BetSlipMobileAndTabletView";
import { useEffect, useLayoutEffect } from "react";
import { LeftSideSection } from "./LeftSideSection";
import { RightSideSection } from "./RightSideSection";
import { Toaster } from "sonner";
import { useGetUserInfo } from "../components/base/store/useGetUserInfo";

export const GlobalPageLayout = () => {
  const { pathname } = useLocation();

  const { setUserInfo } = useGetUserInfo((state) => ({
    setUserInfo: state.setUserInfo,
  }));

  useLayoutEffect(() => {
    console.log({ pathname });
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    setUserInfo();
  }, [setUserInfo]);

  return (
    <div className="min-w-[320px] flex flex-col font-sharkBetFont max-w-[1200px] m-auto px-3">
      <GeneralHeaderLayout />
      <main className="flex-1 relative">
        {/*  */}
        <div className="flex mt-4 gap-3 mobile:justify-center relative">
          <LeftSideSection />
          <div className="w-[57%] mobile:w-full tablet:w-[81%] pc:w-[57%]">
            <Outlet />
          </div>
          <RightSideSection />
        </div>
        {/*  */}
        <BetSlipMobileAndTabletView />
        {/*  */}
      </main>
      <GeneralFooterLayout />
      <Toaster closeButton={true} richColors />
    </div>
  );
};
