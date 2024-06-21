import { useBetStore } from '../store/useBetStore';

export const useHandleGamesButtonsUtilities = () => {
    const { setSelectedBet, selectedBetsArray } = useBetStore((state) => ({
        setSelectedBet: state.setSelectedBet,
        selectedBetsArray: state.selectedBetsArray,
      }));
    
      const isButtonClicked = (
        homeClub: string,
        awayClub: string,
        oddName: string | undefined,
        marketType: string | undefined
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
        id: string,
        homeClub: string,
        awayClub: string,
        odd: number | undefined,
        marketType: string | undefined,
        oddName: string | undefined,
        date: string,
        time: string
      ) => {
        setSelectedBet(
          id,
          homeClub,
          awayClub,
          odd,
          marketType,
          oddName,
          date,
          time
        );
      };
  return {isButtonClicked,handleClick}
}
