import { Games } from "../../Global/Games/Games";
import { Cards } from "./slidingCards/Cards";
import { HeroImageSlider } from "./HeroImageSlider";

export const HomePage = () => {
  return (
    <div>
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
