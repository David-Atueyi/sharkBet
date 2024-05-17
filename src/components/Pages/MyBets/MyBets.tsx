import { MyBet } from "../../Global/MyBet/MyBet";

export const MyBets = () => {
  return (
    <div className="bg-zinc-9 mobile:h-fit mobile:pb-3 tablet:min-h-[57.6dvh] rounded-[20px]">
      <div className="mb-4 text-blue-6 font-bold text-[20px] capitalize border-b-4 border-zinc-7 flex flex-col justify-center items-center pt-3">
        <p className="text-[16px]">my bets</p>
      </div>
      <MyBet />
      <MyBet />
      <MyBet />
      <MyBet />
      <MyBet />
    </div>
  );
};
