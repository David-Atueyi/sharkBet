import { ILeagueMatch } from "../../../base/interface/ILeagueMatch";
import { useBetStore } from "../../../base/store/useBetStore";
import { GameButton } from "../Tabs/GameButton";

export const GameButtons = ({ data }:{data: ILeagueMatch}) => {
      const { setSelectedBet, selectedBetsArray } = useBetStore((state) => ({
        setSelectedBet: state.setSelectedBet,
        selectedBetsArray: state.selectedBetsArray,
      }));

      const isButtonClicked = (
        homeClub: string,
        awayClub: string,
        odd: number
      ) => {
        return selectedBetsArray.some(
          (bet) =>
            bet.homeClub === homeClub &&
            bet.awayClub === awayClub &&
            bet.odd === odd
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
        setSelectedBet(
          homeClub,
          awayClub,
          odd,
          marketType,
          oddName,
          date,
          time
        );
      };
    
  return (
    <div className="flex justify-between text-center gap-3 items-center text-blue-6 text-[12px]">
      <div className="flex gap-[3px]">
        <GameButton
          buttonName={data.teams.home.market.homeWin.odd}
          onClick={() =>
            handleClick(
              data.teams.home.name,
              data.teams.away.name,
              data.teams.home.market.homeWin.odd,
              data.teams.home.market.homeWin.marketType,
              data.teams.home.market.homeWin.oddName,
              data.matchDate.date,
              data.matchDate.time
            )
          }
          isClicked={isButtonClicked(
            data.teams.home.name,
            data.teams.away.name,
            data.teams.home.market.homeWin.odd
          )}
        />
        {/*  */}
        <GameButton
          buttonName={data.generalMarkets.fullTimeDraw.odd}
          onClick={() =>
            handleClick(
              data.teams.home.name,
              data.teams.away.name,
              data.generalMarkets.fullTimeDraw.odd,
              data.generalMarkets.fullTimeDraw.marketType,
              data.generalMarkets.fullTimeDraw.oddName,
              data.matchDate.date,
              data.matchDate.time
            )
          }
          isClicked={isButtonClicked(
            data.teams.home.name,
            data.teams.away.name,
            data.generalMarkets.fullTimeDraw.odd
          )}
        />
        {/*  */}
        <GameButton
          buttonName={data.teams.away.market.awayWin.odd}
          onClick={() =>
            handleClick(
              data.teams.home.name,
              data.teams.away.name,
              data.teams.away.market.awayWin.odd,
              data.teams.away.market.awayWin.marketType,
              data.teams.away.market.awayWin.oddName,
              data.matchDate.date,
              data.matchDate.time
            )
          }
          isClicked={isButtonClicked(
            data.teams.home.name,
            data.teams.away.name,
            data.teams.away.market.awayWin.odd
          )}
        />
      </div>
      <div className="flex gap-[3px] mobile:hidden pc:flex">
        <button className="mobile:w-[52px] pc:w-[60px] flex justify-center items-center h-[40px] rounded-[8px] bg-zinc-7 hover:bg-zinc-10">
          0.5
        </button>
        {/*  */}
        <GameButton
          buttonName={data.generalMarkets.overAndUnder.overGoals["0.5"].odd}
          onClick={() =>
            handleClick(
              data.teams.home.name,
              data.teams.away.name,
              data.generalMarkets.overAndUnder.overGoals["0.5"].odd,
              data.generalMarkets.overAndUnder.overGoals["0.5"].marketType,
              data.generalMarkets.overAndUnder.overGoals["0.5"].oddName,
              data.matchDate.date,
              data.matchDate.time
            )
          }
          isClicked={isButtonClicked(
            data.teams.home.name,
            data.teams.away.name,
            data.generalMarkets.overAndUnder.overGoals["0.5"].odd
          )}
        />
        {/*  */}
        <GameButton
          buttonName={data.generalMarkets.overAndUnder.underGoals["0.5"].odd}
          onClick={() =>
            handleClick(
              data.teams.home.name,
              data.teams.away.name,
              data.generalMarkets.overAndUnder.underGoals["0.5"].odd,
              data.generalMarkets.overAndUnder.underGoals["0.5"].marketType,
              data.generalMarkets.overAndUnder.underGoals["0.5"].oddName,
              data.matchDate.date,
              data.matchDate.time
            )
          }
          isClicked={isButtonClicked(
            data.teams.home.name,
            data.teams.away.name,
            data.generalMarkets.overAndUnder.underGoals["0.5"].odd
          )}
          
        />
        {/*  */}
      </div>
    </div>
  );
}
