import { FireIcon } from '../Icons/FireIcon';

export const HotMatchesHeader = () => {
  return (
    <div className="text-[12px]">
      <div className="flex gap-2 h-[56px] items-center bg-gradient-to-r from-zinc-7 to-zinc-9/25 px-5 rounded-t-[20px]">
        <FireIcon extraStyle={"text-rose-7"} />
        <h3>Top 10 hottest matches in the past hour</h3>
      </div>
      <div className="h-[24px] flex justify-between text-zinc-4 mt-[1px] pl-[9%] biggerPc:pl-[50px] pr-[10px] capitalize">
        <p>match</p>
        <p>popularity</p>
      </div>
    </div>
  );
}
