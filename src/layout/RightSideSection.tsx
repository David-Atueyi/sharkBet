import { BetSlip } from "../components/Global/BetSlip/BetSlip";
import { HotMatches } from "../components/Global/HotMatches/HotMatches";

export const RightSideSection = () => {
  return (
    <div className="w-[26%] hidden pc:flex pc:flex-col gap-5 ">
      <BetSlip />
      <HotMatches />
    </div>
  );
};
