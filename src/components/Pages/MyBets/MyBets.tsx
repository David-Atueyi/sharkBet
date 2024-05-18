import { MyBet } from "../../Global/MyBet/MyBet";
import { useActiveBetsStore } from "../../base/store/useActiveBetsStore";

export const MyBets = () => {
  const { activeBets } = useActiveBetsStore((state) => ({
    activeBets: state.activeBets,
  }));

  return (
    <div className="bg-zinc-9 mobile:min-h-[50vh] mobile:pb-3 tablet:min-h-[57.6dvh] rounded-[20px]">
      <div className="mb-4 text-blue-6 font-bold text-[20px] capitalize border-b-4 border-zinc-7 flex flex-col justify-center items-center pt-3">
        <p className="text-[16px]">my bets</p>
      </div>
      <div
        className={` ${
          activeBets.length <= 0
            ? "h-[40vh] w-full flex justify-center items-center"
            : "h-full"
        }`}
      >
        <MyBet />
      </div>
    </div>
  );
};
