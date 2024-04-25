import { OddsButton } from "../OddsButton/OddsButton";

export const OddsButtons = ({ gameOdds }: { gameOdds: any }) => {
  return (
    <div>
      <div className="flex">
        <OddsButton
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1 "
          contentOne="1"
          contentTwo={gameOdds.teams?.home.market.homeWin}
          extraStyleContentTwo="text-blue-6"
        />
        <OddsButton
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="X"
          contentTwo={gameOdds.generalMarkets?.fullTimeDraw}
          extraStyleContentTwo="text-blue-6"
        />
        <OddsButton
          extraStyle="mobile:w-[79px] pc:w-[77px] h-[25px] ml-[4px] text-[12px] px-[8px] rounded-[4px] pt-1"
          contentOne="2"
          contentTwo={gameOdds.teams?.away.market.awayWin}
          extraStyleContentTwo="text-blue-6"
        />
      </div>
    </div>
  );
};
