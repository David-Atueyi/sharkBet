import { Outlet } from "react-router-dom";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { BetSlipMobileAndTabletView } from "../components/Global/BetSlip/BetSlipMobileAndTabletView";

export const GlobalPageLayout = () => {
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
