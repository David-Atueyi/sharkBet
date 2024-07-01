import { useHandleGamesButtonsUtilities } from "../../../base/hooks/useHandleGamesButtonsUtilities";
import { OddsButton } from "../../../Global/OddsButton/OddsButton";

export const OddsButtons = ({ gameOdds }: { gameOdds: any }) => {
  const { isButtonClicked, handleClick } = useHandleGamesButtonsUtilities();

  return (
    <div>
      <div className="flex">
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.homeTeamName,
              gameOdds.awayTeamName,
              gameOdds.market[0].teamsOdds[0].homeOdd1x2,
              gameOdds.market[0].teamsOdds[0].homeMarketType1x2,
              gameOdds.market[0].teamsOdds[0].homeOddName1x2,
              gameOdds.date,
              gameOdds.time
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="1"
          contentTwo={gameOdds.market[0].teamsOdds[0].homeOdd1x2}
          isClicked={isButtonClicked(
            gameOdds.homeTeamName,
            gameOdds.awayTeamName,
            gameOdds.market[0].teamsOdds[0].homeOddName1x2,
            gameOdds.market[0].teamsOdds[0].homeMarketType1x2
          )}
        />
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.homeTeamName,
              gameOdds.awayTeamName,
              gameOdds.market[0].generalMarkets[0].fullTimeResult[0]
                .fullTimeDrawOdd,
              gameOdds.market[0].generalMarkets[0].fullTimeResult[0]
                .fullTimeDrawMarketType,
              gameOdds.market[0].generalMarkets[0].fullTimeResult[0]
                .fullTimeDrawOddName,
              gameOdds.date,
              gameOdds.time
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="X"
          contentTwo={
            gameOdds.market[0].generalMarkets[0].fullTimeResult[0]
              .fullTimeDrawOdd
          }
          isClicked={isButtonClicked(
            gameOdds.homeTeamName,
            gameOdds.awayTeamName,
            gameOdds.market[0].generalMarkets[0].fullTimeResult[0]
              .fullTimeDrawOddName,
            gameOdds.market[0].generalMarkets[0].fullTimeResult[0]
              .fullTimeDrawMarketType
          )}
        />
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.homeTeamName,
              gameOdds.awayTeamName,
              gameOdds.market[0].teamsOdds[0].awayOdd1x2,
              gameOdds.market[0].teamsOdds[0].awayMarketType1x2,
              gameOdds.market[0].teamsOdds[0].awayOddName1x2,
              gameOdds.date,
              gameOdds.time
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="2"
          contentTwo={gameOdds.market[0].teamsOdds[0].awayOdd1x2}
          isClicked={isButtonClicked(
            gameOdds.homeTeamName,
            gameOdds.awayTeamName,
            gameOdds.market[0].teamsOdds[0].awayOddName1x2,
            gameOdds.market[0].teamsOdds[0].awayMarketType1x2
          )}
        />
      </div>
    </div>
  );
};
