import { CenterSection } from "./CenterSection";
import { LeftSideSection } from "./LeftSideSection";
import { RightSideSection } from "./RightSideSection";


export const HomePageIndex = () => {
  
  return (
    <div className="flex mt-4 gap-3 mobile:justify-center relative">
      <LeftSideSection />
      <CenterSection />
      <RightSideSection />
    </div>
  );
};
