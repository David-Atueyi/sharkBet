import { Outlet } from "react-router-dom";
import { GeneralFooterLayout } from "../components/Global/Layout/GeneralFooterLayout";
import { GeneralHeaderLayout } from "../components/Global/Layout/GeneralHeaderLayout";
import { UserInfoLeftSideSection } from "./UserInfoLeftSideSection";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useGetUserInfo } from "../components/base/store/useGetUserInfo";

export const GeneralUserInfoLayout = () => {
  const { setUserInfo } = useGetUserInfo((state) => ({
    setUserInfo: state.setUserInfo,
    userInfo: state.userInfo,
  }));

  useEffect(() => {
    setUserInfo();
  }, [setUserInfo]);

  
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
