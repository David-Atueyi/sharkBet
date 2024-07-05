import { useHandleGamesButtonsUtilities } from "../../../base/hooks/useHandleGamesButtonsUtilities";
import { Match } from "../../../base/interface/IMatch";
import { GameButton } from "../Tabs/GameButton";

export const GameButtons = ({ data }: { data: Match }) => {
  const { isButtonClicked, handleClick } = useHandleGamesButtonsUtilities();
  return (
    <div className="flex justify-between text-center gap-3 items-center text-blue-6 text-[12px]">
      <div className="flex gap-[3px]">
        <GameButton
          buttonName={data.market[0].teamsOdds[0].homeOdd1x2}
          onClick={() =>
            handleClick(
              data.id,
              data.homeTeamName,
              data.awayTeamName,
              data.market[0].teamsOdds[0].homeOdd1x2,
              data.market[0].teamsOdds[0].homeMarketType1x2,
              data.market[0].teamsOdds[0].homeOddName1x2,
              data.date,
              data.time
            )
          }
          isClicked={isButtonClicked(
            data.homeTeamName,
            data.awayTeamName,
            data.market[0].teamsOdds[0].homeOddName1x2,
            data.market[0].teamsOdds[0].homeMarketType1x2
          )}
        />
        {/*  */}
        <GameButton
          buttonName={
            data.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawOdd
          }
          onClick={() =>
            handleClick(
              data.id,
              data.homeTeamName,
              data.awayTeamName,
              data.market[0].generalMarkets[0].fullTimeResult[0]
                .fullTimeDrawOdd,
              data.market[0].generalMarkets[0].fullTimeResult[0]
                .fullTimeDrawMarketType,
              data.market[0].generalMarkets[0].fullTimeResult[0]
                .fullTimeDrawOddName,
              data.date,
              data.time
            )
          }
          isClicked={isButtonClicked(
            data.homeTeamName,
            data.awayTeamName,
            data.market[0].generalMarkets[0].fullTimeResult[0]
              .fullTimeDrawOddName,
            data.market[0].generalMarkets[0].fullTimeResult[0]
              .fullTimeDrawMarketType
          )}
        />
        {/*  */}
        <GameButton
          buttonName={data.market[0].teamsOdds[0].awayOdd1x2}
          onClick={() =>
            handleClick(
              data.id,
              data.homeTeamName,
              data.awayTeamName,
              data.market[0].teamsOdds[0].awayOdd1x2,
              data.market[0].teamsOdds[0].awayMarketType1x2,
              data.market[0].teamsOdds[0].awayOddName1x2,
              data.date,
              data.time
            )
          }
          isClicked={isButtonClicked(
            data.homeTeamName,
            data.awayTeamName,
            data.market[0].teamsOdds[0].awayOddName1x2,
            data.market[0].teamsOdds[0].awayMarketType1x2
          )}
        />
      </div>
      <div className="flex gap-[3px] mobile:hidden pc:flex">
        <div className="mobile:w-[52px] pc:w-[60px] flex justify-center items-center h-[40px] rounded-[8px] bg-zinc-10">
          0.5
        </div>
        {/*  */}
        <GameButton
          buttonName={
            data.market[0].generalMarkets[0].overs[0].overZeroPointFiveOdd
          }
          onClick={() =>
            handleClick(
              data.id,
              data.homeTeamName,
              data.awayTeamName,
              data.market[0].generalMarkets[0].overs[0].overZeroPointFiveOdd,
              data.market[0].generalMarkets[0].overs[0]
                .overZeroPointFiveMarketType,
              data.market[0].generalMarkets[0].overs[0]
                .overZeroPointFiveOddName,
              data.date,
              data.time
            )
          }
          isClicked={isButtonClicked(
            data.homeTeamName,
            data.awayTeamName,
            data.market[0].generalMarkets[0].overs[0].overZeroPointFiveOddName,
            data.market[0].generalMarkets[0].overs[0]
              .overZeroPointFiveMarketType
          )}
        />
        {/*  */}
        <GameButton
          buttonName={
            data.market[0].generalMarkets[0].unders[0].underZeroPointFiveOdd
          }
          onClick={() =>
            handleClick(
              data.id,
              data.homeTeamName,
              data.awayTeamName,
              data.market[0].generalMarkets[0].unders[0].underZeroPointFiveOdd,
              data.market[0].generalMarkets[0].unders[0]
                .underZeroPointFiveMarketType,
              data.market[0].generalMarkets[0].unders[0]
                .underZeroPointFiveOddName,
              data.date,
              data.time
            )
          }
          isClicked={isButtonClicked(
            data.homeTeamName,
            data.awayTeamName,
            data.market[0].generalMarkets[0].unders[0]
              .underZeroPointFiveOddName,
            data.market[0].generalMarkets[0].unders[0]
              .underZeroPointFiveMarketType
          )}
        />
        {/*  */}
      </div>
    </div>
  );
};
