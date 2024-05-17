

export const MyBet = () => {
  return (
    <div className="flex justify-between bg-zinc-8 p-3 rounded-[13px] mx-2 my-[5px] items-center">
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-baseline capitalize">
          <p className="font-bold text-[14px] mobile:max-w-[93px] truncate">
            man u
          </p>
          <p className="text-[12px] text-zinc-5 uppercase">vs</p>
          <p className="font-bold text-[14px] mobile:max-w-[93px] truncate">
            man city
          </p>
        </div>
        <p className=" font-bold capitalize">home</p>
        <p className="text-[12px] text-zinc-5">1x2</p>
      </div>
      <p className="font-semibold">1.90</p>
    </div>
  );
}
