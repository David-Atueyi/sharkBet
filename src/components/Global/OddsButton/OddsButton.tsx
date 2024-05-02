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
      className={`bg-zinc-7 cursor-pointer flex items-center justify-between hover:bg-zinc-10 ${extraStyle} ${
        isClicked ? "bg-blue-700" : ""
      }`}
      onClick={onClick}
    >
      <p>{contentOne}</p>
      <p
        className={`${extraStyleContentTwo} ${
          isClicked ? "text-blue-3" : ""
        }`}
      >
        {contentTwo}
      </p>
    </button>
  );
};
