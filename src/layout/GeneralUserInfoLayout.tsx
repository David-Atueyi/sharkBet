import { Outlet, useLocation } from "react-router-dom";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { UserInfoLeftSideSection } from "./UserInfoLeftSideSection";
import { Toaster } from "sonner";
import { useLayoutEffect } from "react";

export const GeneralUserInfoLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    if (pathname === "/me/my-bets") {
      document.body.style.overflowY = "scroll";
    }
  }, [pathname]);

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
