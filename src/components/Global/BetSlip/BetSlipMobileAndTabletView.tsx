import { useEffect } from "react";
import { useHandleComponentVisibility } from "../../base/hooks/useHandleComponentVisibility";
import { useHandleViewFullBetSlipInfo } from "../../base/hooks/useHandleViewFullBetSlipInfo";
import { useBetStore } from "../../base/store/useBetStore";
import { BetSlipDropDown } from "../BetSlipDropDown/BetSlipDropDown";
import { BriefBetSlipDropDownInfo } from "../BetSlipDropDown/BriefBetSlipDropDownInfo";
import { DownArrow } from "../Icons/DownArrow";
import { XIcon } from "../Icons/XIcon";

export const BetSlipMobileAndTabletView = () => {
  const { selectedBetsArray } = useBetStore((state) => ({
    selectedBetsArray: state.selectedBetsArray,
  }));

  const {
    isVisible,
    handleComponentContentVisibility,
    handleCloseComponentContentVisibility,
  } = useHandleComponentVisibility();

  const {
    fullBetSlipVisible,
    handleViewFullBetSlipInfo,
    handleCloseViewFullBetSlipInfo,
  } = useHandleViewFullBetSlipInfo();

  const handleBodyOverflow = () => {
    if (fullBetSlipVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    handleBodyOverflow();
  }, [fullBetSlipVisible]);

  return (
    <>
      <div
        className={`rounded flex-col items-center mr-3 fixed bottom-9 right-3 bg-zinc-5 p-2 text-zinc-1 pc:hidden ${
          !isVisible ? "flex" : "hidden"
        }`}
        onClick={handleComponentContentVisibility}
      >
        <div className="bg-blue-5 rounded-full w-[22px] h-[22px] text-center">
          <p>{selectedBetsArray.length}</p>
        </div>
        <p className="font-bold capitalize text-sm">betslip</p>
      </div>

      <div
        className={`flex flex-col w-full fixed left-0 bottom-0 pc:hidden  ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <div className={`relative ${!fullBetSlipVisible ? "block" : "hidden"}`}>
          <div>
            <div className="absolute top-[-33px] right-4 text-zinc-6 bg-zinc-1 w-[60px] h-[33px] text-center rounded-t-full">
              <XIcon
                handleClick={handleCloseComponentContentVisibility}
                textStyle="text-zinc-6 text-xl"
              />
            </div>
            <div onClick={handleViewFullBetSlipInfo}>
              <BriefBetSlipDropDownInfo />
            </div>
          </div>
        </div>

      
          <div
            className={`${fullBetSlipVisible ? "block" : "hidden"}
           `}
          >
            <div
              onClick={handleCloseViewFullBetSlipInfo}
              className={`bg-zinc-8 rounded-t-full `}
            >
              <DownArrow />
            </div>
            <BetSlipDropDown />
          </div>
      </div>
    </>
  );
};
