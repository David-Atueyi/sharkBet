import { NavLink } from "react-router-dom";
import { MenuDropDown } from "../DropDown/MenuDropDown";
import { LogInFormPcView } from "../../Pages/Auth/LogIn/LogInFormPcView";
import { UserInfoDropDown } from "../DropDown/UserInfoDropDown";
import { useEffect } from "react";
import { useUserIsActive } from "../../base/store/useUserIsActive";
import { getAuthData } from "../../base/utility/Auth/getAuthData";

export const GeneralHeaderLayout = () => {
  const { userIsActive, setUserIsActive } = useUserIsActive((state) => ({
    userIsActive: state.userIsActive,
    setUserIsActive: state.setUserIsActive,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data) {
        setUserIsActive(true);
      }
    };

    fetchData();
  }, []);

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
        {!userIsActive && (
          <div
            className={`flex capitalize items-center mobile:gap-2 tablet:gap-3`}
          >
            <LogInFormPcView />
            <NavLink
              to={"/auth/sign-up"}
              className="h-[30px] text-xs bg-blue-6 p-[11px] text-zinc-0 font-bold rounded-md mobile:p-[6px] pc:px-[13px] pc:py-[7px]"
            >
              sign up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
