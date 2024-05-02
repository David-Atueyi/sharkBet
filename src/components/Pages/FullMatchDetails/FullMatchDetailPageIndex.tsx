import { LeftSideSection } from "../../../layout/LeftSideSection";
import { RightSideSection } from "../../../layout/RightSideSection";
import { FullMatchDetails } from "./FullMatchDetails";

export const FullMatchDetailPageIndex = () => {
  return (
    <div className="flex mt-4 gap-3 mobile:justify-center relative">
      <LeftSideSection />
      <FullMatchDetails />
      <RightSideSection />
    </div>
  );
};
