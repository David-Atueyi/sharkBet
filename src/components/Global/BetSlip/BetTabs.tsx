export const BetTabs = ({
  betTabs,
  setBetTabs,
}: {
  betTabs: { tabOne: boolean; tabTwo: boolean };
  setBetTabs: any;
}) => {
  return (
    <div className="relative">
      <div className="mobile:text-md bg-zinc-9 pc:rounded-t-[20px] pc:text-xl pc:flex justify-evenly">
        <button
          className={`p-3 cursor-pointer mobile:text-left capitalize ${
            betTabs.tabOne ? "text-blue-7" : "text-zinc-4"
          }`}
          onClick={() => setBetTabs({ tabOne: true, tabTwo: false })}
        >
          betslip
        </button>
        {/*  */}
        <button
          className={`p-3 cursor-pointer mobile:text-left hidden pc:block capitalize ${
            betTabs.tabTwo ? "text-blue-7" : "text-zinc-4"
          }`}
          onClick={() => setBetTabs({ tabOne: false, tabTwo: true })}
        >
          my bets
        </button>
      </div>
      <div className="absolute bottom-0 w-full mobile:hidden pc:block">
        <div
          className={`bg-gradient-to-r from-blue-7 via-current to-zinc-6 w-[33%] h-[4px] transition-all duration-300 rounded text-blue-7 ${
            betTabs.tabOne
              ? "translate-x-[30%] biggerPc:translate-x-[32%]"
              : "translate-x-[175%] biggerPc:translate-x-[170%]"
          }`}
        ></div>
      </div>
    </div>
  );
};
