import { NavLink } from "react-router-dom";
import { MenuDropDown } from "../DropDown/MenuDropDown";
import { LogInFormPcView } from "../../Pages/Auth/LogIn/LogInFormPcView";
import { UserInfoDropDown } from "../DropDown/UserInfoDropDown";

export const GeneralHeaderLayout = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="pc:hidden">
        <MenuDropDown />
      </div>
      <div className="tablet:w-[150px] h-[50px] mobile:w-[100px]">
        <NavLink to={"/"}>
          <img
            src="/sharkbetlogo.png"
            alt="Shark bet logo"
            className="w-full h-full object-contain"
          />
        </NavLink>
      </div>
      <div className="flex items-center">
        <UserInfoDropDown />
        <div className="flex capitalize items-center mobile:gap-2 tablet:gap-3 mobile:hidden">
          <LogInFormPcView />
          <NavLink
            to={"/auth/sign-up"}
            className="h-[30px] text-xs bg-blue-6 p-[11px] text-zinc-0 font-bold rounded-md mobile:p-[6px] pc:px-[13px] pc:py-[7px]"
          >
            sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};
