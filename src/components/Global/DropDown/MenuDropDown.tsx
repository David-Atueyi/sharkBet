import { useHandleComponentVisibility } from "../../base/hooks/useHandleComponentVisibility";
import { DropDownIcon } from "../Icons/DropDownIcon";
import { XIcon } from "../Icons/XIcon";
import { MenuContent } from "../MenuContent/MenuContent";

export const MenuDropDown = () => {
  const {
    isVisible,
    handleComponentContentVisibility,
    handleCloseComponentContentVisibility,
  } = useHandleComponentVisibility();

  return (
    <div className="relative">
      <img
        src="/dropDownIcon.svg"
        alt=""
        onClick={handleComponentContentVisibility}
      />
      <div
        className={`bg-zinc-10/50 absolute z-[2] left-[-12px] top-[-31px] w-[100dvw] h-[100vh] ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <div className="bg-zinc-10 text-slate-100 mobile:w-[70dvw] tablet:w-[35dvw] h-full p-1 overflow-y-scroll">
          <XIcon
            extraStyle="text-right sticky top-[-5px] bg-zinc-10"
            textStyle="text-xl"
            handleClick={handleCloseComponentContentVisibility}
          />
          <MenuContent />
        </div>
      </div>
    </div>
  );
};
