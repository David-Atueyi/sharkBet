import { useBetStore } from "../../base/store/useBetStore";

export const BriefBetSlipDropDownInfo = () => {
const { selectedBetsArray } = useBetStore((state) => ({
  selectedBetsArray: state.selectedBetsArray,
}));
  
  const totalOdds = selectedBetsArray
    .reduce((sum, bet) => sum + bet.odd, 0)
    .toFixed(2);

  return (
    <div className="flex justify-between p-5 text-sm capitalize items-center text-zinc-8 bg-slate-100 rounded-t-2xl">
      <div className="flex gap-1">
        <div className="bg-blue-5 rounded-full w-[22px] h-[22px] text-center">
          <p>{selectedBetsArray.length}</p>
        </div>
        <p className="text-base font-bold">betslip</p>
      </div>
      <div className="flex gap-8 items-center">
        <p className="text-base font-bold">{totalOdds}</p>
      </div>
    </div>
  );
};
