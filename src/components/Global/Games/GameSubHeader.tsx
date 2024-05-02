
export const GameSubHeader = () => {
  return (
    <div className=" flex justify-end pl-[15px] mobile:pr-[6px] pc:pr-[14px] bg-zinc-8 py-1 items-center border-b-2 border-zinc-10">
      <div className="flex justify-between text-center text-[10px] pc:gap-4 items-center">
        <div className="flex justify-between">
          <p className="w-[60px]">1</p>
          <p className="w-[60px]">x</p>
          <p className="w-[60px]">2</p>
        </div>
        <div className="flex justify-between pc:pr-1 mobile:hidden pc:flex">
          <p className="mobile:w-[55px] pc:w-[60px]">goals</p>
          <p className="mobile:w-[55px] pc:w-[60px]">over</p>
          <p className="mobile:w-[55px] pc:w-[60px]">under</p>
        </div>
      </div>
    </div>
  );
}
