import { Email } from "../../Global/Icons/Email";
import { GoodShield } from "../../Global/Icons/GoodShield";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { EditDateOfBirth } from "./EditDateOfBirth/EditDateOfBirth";
import { EditUserName } from "./EditUserName/EditUserName";

export const MyAccountInfo = () => {
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
            <p className="text-zinc-3">david@gmail.com</p>
          </div>
          <div>
            <EditUserName />
          </div>
          <div>
            <EditDateOfBirth />
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
