export const HeadingForPc = () => {
  return (
    <div>
      <div className="mb-[15px] w-[210px] to-zinc-6 mobile:hidden pc:block">
        <div className="flex gap-3">
          <div className="translate-y-[8px] translate-x-[3px]">
            <div className="bg-blue-7 w-[10px] h-[10px] -skew-x-[17deg] translate-y-[3px] -translate-x-[2px]"></div>
            <div className="bg-blue-7/50 w-[10px] h-[10px] -skew-x-[17deg]"></div>
          </div>
          <p className="capitalize text-xl font-extrabold text-zinc-0">
            featured matches
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-blue-7 via-current text-blue-7"></div>
      </div>
    </div>
  );
};
