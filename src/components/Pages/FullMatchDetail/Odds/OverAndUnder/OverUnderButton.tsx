export const OverUnderButton = ({
  content,
  onClick,
  extraStyle,
  isClicked,
}: {
  content: number | undefined;
  onClick?: () => void;
  extraStyle?: string;
  isClicked?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`capitalize w-[200px] px-[10px] mobile:min-h-[35px] pc:min-h-[40px] rounded-[8px] ${extraStyle} ${
        isClicked ? "bg-blue-700 text-blue-3" : "bg-zinc-7 text-blue-6 pc:hover:bg-zinc-10"
      }`}
    >
      {content}
    </button>
  );
};
