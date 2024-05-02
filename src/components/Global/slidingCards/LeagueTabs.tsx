import { useCardUtilities } from "../../base/store/useCardUtilities";
import leagues from "../../base/dummyDatas/leagueLogo.json";

export const LeagueTabs = ({
  handleLeagueClicked,
}: {
  handleLeagueClicked: (id: number) => any;
}) => {
  const { activeIndex } = useCardUtilities((state) => ({
    activeIndex: state.activeIndex,
  }));

  return (
    <div className="flex gap-2 pc:hidden pb-[8px] overflow-x-auto no-scrollbar text-zinc-0 font-bold ">
      {leagues.map((league, index) => (
        <button
          key={index}
          className={`flex items-center pr-2 text-[12px] rounded-[6px] ${
            index === activeIndex ? "bg-zinc-7" : null
          }`}
          onClick={() => {
            handleLeagueClicked(index);
          }}
        >
          <div
            className={` border-zinc-5 w-[35px] h-[29px] rounded-[6px] p-1 ${
              index === activeIndex ? "border-0" : "border-2"
            }`}
          >
            <img
              src={league.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <p
            className={`pl-0 p-1 text-nowrap text-left ${
              index === activeIndex ? "visible" : "hidden"
            }`}
          >
            {league.name}
          </p>
        </button>
      ))}
    </div>
  );
};
