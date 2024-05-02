import { CenterSection } from "./CenterSection";
import { LeftSideSection } from "../../../layout/LeftSideSection";
import { RightSideSection } from "../../../layout/RightSideSection";

export const HomePageIndex = () => {
  return (
    <div className="flex mt-4 gap-3 mobile:justify-center relative">
      <LeftSideSection />
      <CenterSection />
      <RightSideSection />
    </div>
  );
};
