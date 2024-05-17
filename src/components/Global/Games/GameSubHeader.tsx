export const GameSubHeader = ({ country, league }: { country?: string; league:string }) => {
  return (
    <div className="bg-zinc-9 justify-between items-center  border-b-2 border-zinc-10 ">
      <p className="text-[13px] px-[15px] py-1">
        {country} - {league}
      </p>
      <div className="bg-zinc-8 flex justify-end px-[15px] py-2">
        <div className="flex justify-between text-center text-[10px] pc:gap-4 items-center">
          <div className="flex justify-between">
            <p className="mobile:w-[55px] pc:w-[60px]">1</p>
            <p className="mobile:w-[55px] pc:w-[60px]">x</p>
            <p className="mobile:w-[55px] pc:w-[60px]">2</p>
          </div>
          <div className="flex justify-between pc:pr-1 mobile:hidden pc:flex">
            <p className="pc:w-[60px]">goals</p>
            <p className="pc:w-[60px]">over</p>
            <p className="pc:w-[60px]">under</p>
          </div>
        </div>
      </div>
    </div>
  );
};
