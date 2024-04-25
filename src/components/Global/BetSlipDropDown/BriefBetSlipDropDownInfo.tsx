export const BriefBetSlipDropDownInfo = () => {
  return (
    <div className="flex justify-between p-5 text-sm capitalize items-center text-zinc-8 bg-slate-100 rounded-t-2xl">
      <div className="flex gap-1">
        <div className="bg-blue-5 rounded-full w-[22px] h-[22px] text-center">
          <p>2</p>
        </div>
        <p className="text-base font-bold">betslip</p>
      </div>
      <div className="flex gap-8 items-center">
        <p>1x</p>
        <p>single</p>
        <p className="text-base font-bold">10.50</p>
      </div>
    </div>
  );
};
