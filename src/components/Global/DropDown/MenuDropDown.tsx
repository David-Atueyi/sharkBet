import { XIcon } from "../Icons/XIcon";
import { MenuContent } from "../DropDownContent/MenuContent";
import { useHandleDropDown } from "../../base/hooks/useHandleDropDown";

export const MenuDropDown = () => {
  const { isVisible, handleDropDownVisibility, handleCloseDropDownVisibility } =
    useHandleDropDown();

  return (
    <div className="relative ">
      <img src="/dropDownIcon.svg" alt="" onClick={handleDropDownVisibility} />
      <div
        className={`bg-zinc-10/50 absolute z-[2] left-[-12px] top-[-31px] w-[100dvw] h-[100vh] ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={handleCloseDropDownVisibility}
      ></div>
      <div
        className={`absolute z-[3] left-[-12px] top-[-31px] flex flex-col bg-zinc-10 text-slate-100 mobile:w-[70dvw] tablet:w-[35dvw] h-[100dvh] p-1 overflow-y-scroll ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <XIcon
          extraStyle="place-self-end sticky top-[-5px] bg-zinc-10 w-[30px] h-[30px]"
          textStyle="stroke-zinc-0"
          handleClick={handleCloseDropDownVisibility}
        />
        <MenuContent onClick={handleCloseDropDownVisibility} />
      </div>
    </div>
  );
};
