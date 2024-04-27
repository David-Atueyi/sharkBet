import { HotMatch } from "./HotMatch";
import { HotMatchesHeader } from "./HotMatchesHeader";


export const HotMatches = () => {
  

  return (
    <div className="w-full rounded-[20px] bg-zinc-8 mobile:hidden pc:block">
      <HotMatchesHeader />
     <HotMatch/>
    </div>
  );
};
