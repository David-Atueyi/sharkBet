
export const SlideCardLoadingSkeletonTemplate = () => {
  return (
    <div className="animate-pulse bg-zinc-8 w-[279px] h-[180px] rounded-[8px] p-3 flex justify-between flex-col">
      <div className="bg-zinc-7 w-[50px] h-[18px] rounded-[8px]"></div>
      <div className="bg-zinc-7 w-[100%] h-[55px] rounded-[8px]"></div>
      <div className="flex gap-2">
        <div className="bg-zinc-7 w-[33.3%] h-[35px] rounded-[8px]"></div>
        <div className="bg-zinc-7 w-[33.3%] h-[35px] rounded-[8px]"></div>
        <div className="bg-zinc-7 w-[33.3%] h-[35px] rounded-[8px]"></div>
      </div>
      <div className="bg-zinc-7 w-[100%] h-[30px] rounded-[8px]"></div>
    </div>
  );
};


