interface IGamesTabs {
  conditionalStyle: any;
  onClickFunction: () => void;
  nameOfTab: string;
}

export const GamesTabs = ({
  conditionalStyle,
  onClickFunction,
  nameOfTab,
}: IGamesTabs) => {
  return (
    <>
      <button
        className={`py-[8px] capitalize ${conditionalStyle}`}
        onClick={onClickFunction}
      >
        {nameOfTab}
      </button>
    </>
  );
};
