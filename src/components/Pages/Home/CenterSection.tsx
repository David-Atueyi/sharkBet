import { Games } from "../../Global/Games/Games";
import { Cards } from "../../Global/slidingCards/Cards";
import { HeroImageSlider } from "./HeroImageSlider";

export const CenterSection = () => {
  return (
    <div className="w-[57%] mobile:w-full tablet:w-[81%] pc:w-[57%]">
      <div>
        <HeroImageSlider />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Games />
      </div>
    </div>
  );
};
