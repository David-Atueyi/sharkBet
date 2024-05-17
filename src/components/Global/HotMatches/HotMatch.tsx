import { BallIcon } from "../Icons/BallIcon";
import All from "../../base/dummyDatas/allMatches.json";
import { Link } from "react-router-dom";

export const HotMatch = () => {
  const hotMatches = All.filter((hotMatch) => hotMatch.hotMatch);
  return (
    <>
      {hotMatches.length > 0 && (
        <>
          {hotMatches.map((hotMatch, index) => (
            <Link
              to={`/FullMatch/homeTeam=${hotMatch.teams?.home.name}&awayTeam=${hotMatch.teams?.away.name}&?gameId=${hotMatch.id}`}
              key={index}
              className={`px-[10px] pt-[10px] pb-[8px] h-[62px] flex justify-between mx-[1px] ${
                index === hotMatches.length - 1
                  ? ""
                  : "border-b-2 border-zinc-7"
              }`}
            >
              <div>
                <p className="text-[12px] pl-1 mt-[26px]">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-2 w-[157px]">
                <div className="flex text-[10px] gap-1 items-center text-zinc-5">
                  <p className="max-w-[80%]">
                    {hotMatch.country} - {hotMatch.league}
                  </p>
                  <BallIcon extraStyle="text-zinc-5 text-xs w-[18px] h-[18px]" />
                </div>
                <div className="flex gap-2 text-[14px] capitalize text-zinc-2">
                  <p className="max-w-[40.1235%] truncate">
                    {hotMatch.teams.home.name}
                  </p>
                  <p className="lowercase text-zinc-4">vs</p>
                  <p className="max-w-[40.1235%] truncate">
                    {hotMatch.teams.away.name}
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-blue-7 max-w-[60px] mt-[25px] w-[45px] truncate">
                {hotMatch.popularity}
              </p>
            </Link>
          ))}
        </>
      )}
    </>
  );
};
