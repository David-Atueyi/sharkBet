export const OverUnderButton = ({
  content,
  onClick,
  extraStyle,
  isClicked,
}: {
  content: string | number;
  onClick?: () => void;
  extraStyle?: string;
  isClicked?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`capitalize pc:hover:bg-zinc-10 w-[200px] px-[10px] mobile:min-h-[35px] pc:min-h-[40px] rounded-[8px] ${extraStyle} ${
        isClicked ? "bg-blue-700 text-blue-3" : "bg-zinc-7 text-blue-6"
      }`}
    >
      {content}
    </button>
  );
};
