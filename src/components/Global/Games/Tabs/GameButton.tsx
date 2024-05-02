export const GameButton = ({
  buttonName,
  extraStyle,
  onClick,
  isClicked,
}: {
  buttonName: number | string;
  extraStyle?: string;
  onClick: () => void;
  isClicked?: boolean;
}) => {
  return (
    <button
      className={`mobile:w-[52px] pc:w-[60px] h-[40px] flex justify-center items-center pc:hover:bg-zinc-10 ${extraStyle} ${
        isClicked
          ? "bg-blue-7 text-zinc-3 rounded-[8px]"
          : "bg-zinc-7 rounded-[8px]"
      }`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};
