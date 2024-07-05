
export const OddButton = ({
  contentOne,
  contentTwo,
  onClick,
  isClicked,
  extraStyle
}: {
  onClick?: () => void;
  contentOne: string;
  contentTwo: number;
    isClicked?: boolean;
  extraStyle:string
}) => {
  return (
    <button
      onClick={onClick}
      className={`capitalize px-[10px] mobile:min-h-[35px] pc:min-h-[40px] flex justify-between items-center rounded-[8px] ${extraStyle} ${
        isClicked ? "bg-blue-700" : "bg-zinc-7 pc:hover:bg-zinc-10"
      }`}
    >
      <span className="mobile:text-[11px] pc:text-[12px] text-zinc-3">
        {contentOne}
      </span>
      <span
        className={`mobile:text-[12px] tablet:text-[16px] ${
          isClicked ? "text-blue-3" : "text-blue-6"
        }`}
      >
        {contentTwo}
      </span>
    </button>
  );
};
