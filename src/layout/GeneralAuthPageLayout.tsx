import { Outlet } from "react-router-dom";
import { Footer } from "../components/Pages/Auth/Layout/Footer";
import { Header } from "../components/Pages/Auth/Layout/Header";

export const GeneralAuthPageLayout = () => {
  return (
    <div className="min-w-[320px] flex flex-col justify-center items-center h-[100dvh] font-sharkBetFont">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
