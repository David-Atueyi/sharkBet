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
    homeClub: string,
    awayClub: string,
    odd: number,
    marketType: string,
    oddName: string,
    date: string,
    time: string
  ) => {
    setSelectedBet(homeClub, awayClub, odd, marketType, oddName, date, time);
  };

  return (
    <div>
      <div className="flex">
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.teams.home.name,
              gameOdds.teams.away.name,
              gameOdds.teams.home.market.homeWin.odd,
              gameOdds.teams.home.market.homeWin.marketType,
              gameOdds.teams.home.market.homeWin.oddName,
              gameOdds.matchDate.date,
              gameOdds.matchDate.time
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="1"
          contentTwo={gameOdds.teams?.home.market.homeWin.odd}
          isClicked={isButtonClicked(
            gameOdds.teams.home.name,
            gameOdds.teams.away.name,
            gameOdds.teams.home.market.homeWin.oddName,
            gameOdds.teams.home.market.homeWin.marketType
          )}
        />
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.teams.home.name,
              gameOdds.teams.away.name,
              gameOdds.generalMarkets.fullTimeDraw.odd,
              gameOdds.generalMarkets.fullTimeDraw.marketType,
              gameOdds.generalMarkets.fullTimeDraw.oddName,
              gameOdds.matchDate.date,
              gameOdds.matchDate.time
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="X"
          contentTwo={gameOdds.generalMarkets?.fullTimeDraw.odd}
          isClicked={isButtonClicked(
            gameOdds.teams.home.name,
            gameOdds.teams.away.name,
            gameOdds.generalMarkets.fullTimeDraw.oddName,
            gameOdds.generalMarkets.fullTimeDraw.marketType
          )}
        />
        <OddsButton
          onClick={() =>
            handleClick(
              gameOdds.teams.home.name,
              gameOdds.teams.away.name,
              gameOdds.teams.away.market.awayWin.odd,
              gameOdds.teams.away.market.awayWin.marketType,
              gameOdds.teams.away.market.awayWin.oddName,
              gameOdds.matchDate.date,
              gameOdds.matchDate.time
            )
          }
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="2"
          contentTwo={gameOdds.teams?.away.market.awayWin.odd}
          isClicked={isButtonClicked(
            gameOdds.teams.home.name,
            gameOdds.teams.away.name,
            gameOdds.teams.away.market.awayWin.oddName,
            gameOdds.teams.away.market.awayWin.marketType
          )}
        />
      </div>
    </div>
  );
};
