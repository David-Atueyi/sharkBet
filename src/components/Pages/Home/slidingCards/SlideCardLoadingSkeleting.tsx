import { useMatchesFromDataBase } from "../../../base/store/useMatchesFromDataBase";

const SlideCardLoadingSkeleting = () => {
  return (
    <div className="animate-pulse bg-zinc-7 w-[279px] h-[180px] rounded-[8px] p-3 flex justify-between flex-col">
      <div className="bg-zinc-6 w-[50px] h-[18px] rounded-[8px]"></div>
      <div className="bg-zinc-6 w-[100%] h-[55px] rounded-[8px]"></div>
      <div className="flex gap-2">
        <div className="bg-zinc-6 w-[33.3%] h-[35px] rounded-[8px]"></div>
        <div className="bg-zinc-6 w-[33.3%] h-[35px] rounded-[8px]"></div>
        <div className="bg-zinc-6 w-[33.3%] h-[35px] rounded-[8px]"></div>
      </div>
      <div className="bg-zinc-6 w-[100%] h-[30px] rounded-[8px]"></div>
    </div>
  );
};

export const LoadingSkeletons = () => {
  const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
    matchesFromDataBase: state.matchesFromDataBase,
  }));
  return (
    <div
      className={`overflow-hidden ${
        matchesFromDataBase.length > 0 ? "hidden" : "block"
      }`}
    >
      <div className="grid grid-cols-4 w-[1150px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <SlideCardLoadingSkeleting key={index} />
        ))}
      </div>
    </div>
  );
};
