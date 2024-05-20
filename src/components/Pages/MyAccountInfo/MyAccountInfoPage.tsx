import { MyAccountInfo } from "./MyAccountInfo";

export const MyAccountInfoPage = () => {
  return (
    <div className="text-zinc-3 bg-zinc-9 mobile:min-h-fit mobile:pb-3 tablet:min-h-[57.6dvh] rounded-[20px]">
      <p className="text-center pt-3 font-bold border-b-4 border-b-zinc-6">
        My Account Info
      </p>
      <MyAccountInfo />
    </div>
  );
};
