interface IGamesTabs {
  onClickFunction: () => void;
  nameOfTab: string;
  conditionalStyle: string;
  extraStyle?: string;
}

export const MarketTabs = ({
  onClickFunction,
  nameOfTab,
  conditionalStyle,
  extraStyle,
}: IGamesTabs) => {
  return (
    <div className={`pc:px-[12px] pc:hover:bg-zinc-3 ${extraStyle} `}>
      <button
        className={`text-zinc-4 mobile:px-[8px] pc:px-0 capitalize mobile:rounded-[12px] pc:rounded-none text-[12px] h-[24px] text-center text-nowrap pc:bg-zinc-1 mobile:min-w-[45px] pc:w-full pc:text-left pc:h-[37px] pc:border-b-2 pc:border-zinc-3 pc:hover:bg-zinc-3 pc:text-zinc-10 ${conditionalStyle}`}
        onClick={onClickFunction}
      >
        {nameOfTab}
      </button>
    </div>
  );
};
