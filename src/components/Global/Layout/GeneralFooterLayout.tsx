export const GeneralFooterLayout = () => {
  return (
    <div className="p-6 flex pc:justify-between mobile:flex-col pc:flex-row pc:gap-0 mobile:gap-3 mobile:items-center text-[13px] text-zinc-5 mt-3 mobile:bg-zinc-9/40 pc:bg-zinc-9/5">
      <div className="pc:w-[33.3%] flex flex-col gap-5 text-center mobile:items-center">
        <div className="w-[200px] h-[50px]">
          <img
            src="./sharkbetlogo.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex gap-3 text-left">
          <p className="w-[37px] h-[37px] border-rose-8 border-2 rounded-full text-rose-8 p-[6px] pt-[8px]">
            18+
          </p>
          <p>
            Players must be 18 or older to register or play at MSport. Please
            note that gambles may have negative effects if not made with
            temperance.
          </p>
        </div>
        <p>&copy; 2024 EA-dav. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 mobile:text-center pc:text-left">
        <h4 className="text-blue-1 capitalize">about us</h4>
        <div className="flex flex-col gap-3">
          <p>T&C</p>
          <p>responsible gaming</p>
          <p>privacy policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mobile:text-center pc:text-left">
        <h4 className="text-blue-1 capitalize">How to Play</h4>
        <div className="flex flex-col gap-3">
          <p>FAQ</p>
          <p>sports</p>
          <p>games</p>
          <p>jackpot</p>
          <p>others</p>
        </div>
      </div>
    </div>
  );
};
