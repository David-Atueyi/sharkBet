import { ILeagueMatch } from "../../base/interface/ILeagueMatch";
import { Link } from "react-router-dom";
import { ILeague } from "./leagues";
import { GameSubHeader } from "./GameSubHeader";
import { GameButtons } from "./GameButton/GameButtons";

export const Game = ({
  leagueTitle,
  allLeague,
}: {
  leagueTitle?: ILeague;
  allLeague: ILeagueMatch[];
}) => {
  const renderedCountries: (string | undefined)[] = [];

  return (
    <div className="capitalize">
      <p
        className={`text-[12px] h-[20px] px-[15px] ${
          leagueTitle?.country === "All" ? "block" : "hidden"
        }`}
      >
        {leagueTitle?.country} - {leagueTitle?.leagueName}
      </p>
      {allLeague.map((data: ILeagueMatch, index: number) => (
        <div
          className=" bg-zinc-8 pb-[6px] border-b-2 border-zinc-10"
          key={index}
        >
          <div>
            {!renderedCountries.includes(data.country) && (
              <GameSubHeader country={data.country} league={data.league}/>
            )}
            <div className="hidden">{renderedCountries.push(data.country)}</div>
          </div>

          <div className="px-[15px] pt-2">
            <div className="flex gap-4 text-[10px] text-zinc-4 mb-1">
              <p>
                {data.matchDate?.time} / {data.matchDate?.date}
              </p>
            </div>
            <div className="flex justify-between">
              <Link
                to={`/FullMatch/homeTeam=${data.teams?.home.name}&awayTeam=${data.teams?.away.name}&?gameId=${data.id}`}
                className="text-[14px] w-full"
              >
                <p className="w-[100px] truncate tablet:w-[180px] pc:w-[100px]">
                  {data.teams?.home.name}
                </p>
                <p className="w-[100px] truncate tablet:w-[180px] pc:w-[100px]">
                  {data.teams?.away.name}
                </p>
              </Link>
              <GameButtons data={data} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
