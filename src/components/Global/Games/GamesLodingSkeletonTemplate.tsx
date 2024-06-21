export const GamesLodingSkeletonTemplate = () => {
  return (
    <div className="animate-pulse">
      <div className=" h-[30px] bg-zinc-8 border-y-2 border-y-zinc-10 flex justify-between">
        <div></div>
        <div className="flex justify-between pr-6 gap-8">
          <div className="flex gap-6 p-2">
            <div className="bg-zinc-7 h-[10px] w-[35px] rounded"></div>
            <div className="bg-zinc-7 h-[10px] w-[35px] rounded"></div>
            <div className="bg-zinc-7 h-[10px] w-[35px] rounded"></div>
          </div>
          <div className="flex gap-6 p-2 mobile:hidden pc:visible">
            <div className="bg-zinc-7 h-[10px] w-[35px] rounded"></div>
            <div className="bg-zinc-7 h-[10px] w-[35px] rounded"></div>
            <div className="bg-zinc-7 h-[10px] w-[35px] rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full bg-zinc-8 h-[69px] p-2 pr-3 flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="mobile:w-[50px] tablet:w-[70px] h-[10px] bg-zinc-7 rounded"></div>
          <div className="mobile:w-[70px] tablet:w-[100px] h-[15px] bg-zinc-7 rounded"></div>
          <div className="mobile:w-[70px] tablet:w-[100px] h-[15px] bg-zinc-7 rounded"></div>
        </div>
        <div className="pt-2 flex gap-3">
          <div className="flex justify-between gap-1">
            <div className="w-[60px] h-[45px] bg-zinc-7 rounded-[10px]"></div>
            <div className="w-[60px] h-[45px] bg-zinc-7 rounded-[10px]"></div>
            <div className="w-[60px] h-[45px] bg-zinc-7 rounded-[10px]"></div>
          </div>
          <div className="flex justify-between gap-1 mobile:hidden pc:visible">
            <div className="w-[60px] h-[45px] bg-zinc-7 rounded-[10px]"></div>
            <div className="w-[60px] h-[45px] bg-zinc-7 rounded-[10px]"></div>
            <div className="w-[60px] h-[45px] bg-zinc-7 rounded-[10px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
