import { useBetStore } from "../../../base/store/useBetStore";
import { OddsButton } from "../../../Global/OddsButton/OddsButton";

export const OddsButtons = ({ gameOdds }: { gameOdds: any }) => {
  const { setSelectedBet, selectedBetsArray } = useBetStore((state) => ({
    setSelectedBet: state.setSelectedBet,
    selectedBetsArray: state.selectedBetsArray,
  }));

  const isButtonClicked = (
    homeClub: string,
    awayClub: string,
    oddName: string,
    marketType: string
  ) => {
    return selectedBetsArray.some(
      (bet) =>
        bet.homeClub === homeClub &&
        bet.awayClub === awayClub &&
        bet.oddName === oddName &&
        bet.marketType === marketType
    );
  };

  const handleClick = (
    id:number,
    homeClub: string,
    awayClub: string,
    odd: number,
    marketType: string,
    oddName: string,
    date: string,
    time: string
  ) => {
    setSelectedBet(id,homeClub, awayClub, odd, marketType, oddName, date, time);
  };

  return (
    <div>
      <div className="flex">
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.id,
              gameOdds.homeTeamName,
              gameOdds.awayTeamName,
              gameOdds.market[0].teamsOdds[0].homeOdd1x2,
              gameOdds.market[0].teamsOdds[0].homeMarketType1x2,
              gameOdds.market[0].teamsOdds[0].homeOddName1x2,
              gameOdds.matchDate,
              gameOdds.matchTime
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
              gameOdds.id,
              gameOdds.homeTeamName,
              gameOdds.awayTeamName,
              gameOdds.market[0].generalMarket[0].fullTimeResult[0].fullTimeDrawOdd,
              gameOdds.market[0].generalMarket[0].fullTimeResult[0].fullTimeDrawMarketType,
              gameOdds.market[0].generalMarket[0].fullTimeResult[0].fullTimeDrawOddName,
              gameOdds.matchDate,
              gameOdds.matchTime
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="X"
          contentTwo={gameOdds.market[0].generalMarket[0].fullTimeResult[0].fullTimeDrawOdd}
          isClicked={isButtonClicked(
            gameOdds.homeTeamName,
            gameOdds.awayTeamName,
            gameOdds.market[0].generalMarket[0].fullTimeResult[0].fullTimeDrawOddName,
            gameOdds.market[0].generalMarket[0].fullTimeResult[0].fullTimeDrawMarketType
          )}
        />
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.id,
              gameOdds.homeTeamName,
              gameOdds.awayTeamName,
              gameOdds.market[0].teamsOdds[0].awayOdd1x2,
              gameOdds.market[0].teamsOdds[0].awayMarketType1x2,
              gameOdds.market[0].teamsOdds[0].awayOddName1x2,
              gameOdds.matchDate,
              gameOdds.matchTime
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
