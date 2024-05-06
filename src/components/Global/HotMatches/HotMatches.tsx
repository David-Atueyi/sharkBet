import { useLocation } from "react-router-dom";
import { HotMatch } from "./HotMatch";
import { HotMatchesHeader } from "./HotMatchesHeader";

export const HotMatches = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`w-full rounded-[20px] bg-zinc-8 mobile:hidden  ${
        pathname === "/" ? "pc:block" : "pc:hidden"
      }`}
    >
      <HotMatchesHeader />
      <HotMatch />
    </div>
  );
};
