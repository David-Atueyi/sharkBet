interface IOddsButton {
  extraStyle: string;
  contentOne?: string;
  contentTwo?: number;
  extraStyleContentTwo?: string;
  onClick: () => void;
  isClicked:boolean;
}

export const OddsButton = ({
  extraStyle,
  contentOne,
  contentTwo,
  extraStyleContentTwo,
  onClick,
  isClicked
}: IOddsButton) => {
  return (
    <button
      className={`cursor-pointer flex items-center justify-between ${extraStyle} ${
        isClicked ? "bg-blue-700" : "bg-zinc-7 pc:hover:bg-zinc-10"
      }`}
      onClick={onClick}
    >
      <p>{contentOne}</p>
      <p
        className={`${extraStyleContentTwo} ${
          isClicked ? "text-blue-3" : "text-blue-700"
        }`}
      >
        {contentTwo}
      </p>
    </button>
  );
};
