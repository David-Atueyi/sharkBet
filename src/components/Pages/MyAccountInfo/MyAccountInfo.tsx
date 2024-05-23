import { useEffect, useState } from "react";
import { Email } from "../../Global/Icons/Email";
import { GoodShield } from "../../Global/Icons/GoodShield";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { getAuthData } from "../../base/utility/getAuthData";
import { Calendar } from "../../Global/Icons/Calendar";
import { UserIcon } from "../../Global/Icons/UserIcon";

export const MyAccountInfo = () => {
const [userData, setUserData] = useState<{
  username: string;
  email: string;
  dob: string;
}>();

useEffect(() => {
  const fetchData = async () => {
    const data = await getAuthData();
    if (data) {
      setUserData({
        username: data?.user.user_metadata.username,
        email: data?.user.user_metadata.email,
        dob: data?.user.user_metadata.dob,
      });
    }
  };

  fetchData();
}, []);


  return (
    <div className="px-3 pt-3">
      <div>
        <p className="capitalize mb-3 text-[13px] text-zinc-4">
          basic information
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center border-b-2 border-b-zinc-6 pb-3">
            <div className="flex items-center gap-1 capitalize">
              <Email extraStyle="fill-blue-7" />
              <p className="text-[15px]">email</p>
            </div>
            <p className="text-zinc-3">{userData?.email}</p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-b-zinc-6 pb-3">
            <div className="flex items-center gap-1 capitalize">
              <UserIcon />
              <p className="text-[15px]">User Name</p>
            </div>
            <p className="text-zinc-3">{userData?.username}</p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-b-zinc-6 pb-3">
            <div className="flex items-center gap-1 capitalize">
              <Calendar extraStyle="fill-blue-6" />
              <p className="text-[15px]">Date Of Birth</p>
            </div>
            <p className="text-zinc-3">{userData?.dob}</p>
          </div>
        </div>
        <div>
          <div className="capitalize mb-3 text-[13px] text-zinc-4 flex gap-2 pt-3">
            <p>account security</p> <GoodShield />
          </div>
          <div>
            <ChangePassword />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
