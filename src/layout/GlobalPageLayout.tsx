import { Outlet, useLocation } from "react-router-dom";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { BetSlipMobileAndTabletView } from "../components/Global/BetSlip/BetSlipMobileAndTabletView";
import { useLayoutEffect } from "react";

export const GlobalPageLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log({ pathname });
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  
  return (
    <div className="min-w-[320px] flex flex-col font-sharkBetFont max-w-[1200px] m-auto px-3">
      <GeneralHeaderLayout />
      <main className="flex-1 relative">
        <Outlet />
        {/*  */}
        <BetSlipMobileAndTabletView />
        {/*  */}
      </main>
      <GeneralFooterLayout />
    </div>
  );
};
