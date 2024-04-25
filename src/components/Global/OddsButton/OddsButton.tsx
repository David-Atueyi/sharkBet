interface IOddsButton {
  extraStyle: string;
  contentOne?: string;
  contentTwo?: number;
  extraStyleContentTwo?: string;
}

export const OddsButton = ({
  extraStyle,
  contentOne,
  contentTwo,
  extraStyleContentTwo,
}: IOddsButton) => {
  return (
    <button
      className={`bg-zinc-7 cursor-pointer flex items-center justify-between hover:bg-zinc-10 focus:bg-blue-7 ${extraStyle}`}
    >
      <p>{contentOne}</p>
      <p className={`${extraStyleContentTwo}`}>{contentTwo}</p>
    </button>
  );
};
