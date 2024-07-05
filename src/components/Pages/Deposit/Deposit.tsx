import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../Global/FormContent/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { depositValidator } from "./depositValidator";
import { IDepositInputs } from "../../base/interface/IDepositInputs";
import { insertTransactionsDatas } from "../../base/utility/transactionUtilities/insertTransactionsDatas";
import { useGetUserInfo } from "../../base/store/useGetUserInfo";
import { updateUserAccountBalance } from "../../base/utility/accountBalance/updateUserAccountBalance";
import { getAccountBalance } from "../../base/utility/accountBalance/getAccountBalance";
import { useHandleAccountBalance } from "../../base/store/useHandleAccountBalance";
import { toast } from "sonner";
import { useState } from "react";

export const Deposit = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm<IDepositInputs>({
    resolver: yupResolver(depositValidator),
  });

  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { setBalance } = useHandleAccountBalance((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  const { mutate: updateAccountBalance } = updateUserAccountBalance();
  const { data: accountBalance = [] } = getAccountBalance();

  const submitFunction = async (data: any) => {
    setIsLoading(true);
    setTimeout(() => {
      const currentBalance =
        accountBalance && accountBalance[0]
          ? parseFloat(accountBalance[0].balance)
          : 0.0;
      const topUpAmount = parseFloat(data.top_up);

      if (isNaN(currentBalance) || isNaN(topUpAmount)) {
        console.error("Invalid account balance or top-up amount");
        return;
      }

      const newBalance = (currentBalance + topUpAmount).toFixed(2);

      updateAccountBalance(newBalance);

      insertTransactionsDatas({
        transactionType: "Deposits - Transfer",
        amount: topUpAmount.toString(),
        transactionStatus: "successful",
        userId: userInfo.userId,
      });

      setBalance(newBalance);

      methods.reset();

      setIsLoading(false);

      toast.success(`you have successfully made a deposit of ₦${topUpAmount}`);
    }, 2000);
  };

  return (
    <div className="text-zinc-3 bg-zinc-9 mobile:h-fit mobile:pb-3 tablet:h-[57.6dvh] rounded-[20px]">
      <p className="text-center pt-3 font-bold border-b-4 border-b-zinc-6">
        Bank Card
      </p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitFunction)}
          className="flex gap-5 flex-col items-center px-[12px]"
        >
          <div className="gap-5 tablet:gap-7 flex flex-col ">
            <div className="mobile:text-center tablet:gap-3 pc:gap-7 tablet:flex mt-4">
              <p className=" capitalize text-[14px] font-bold mobile:mb-2">
                add a new card
              </p>
              <div className="flex flex-col gap-7">
                <div className="mobile:w-full w-fit relative">
                  <Input
                    name="card_number"
                    type="tel"
                    placeholder="Card Number"
                    id="card_number"
                    maxLength={16}
                    extraStyle="mobile:w-[100%] tablet:w-[240px] pc:w-[300px] rounded-full border-2 pc:hover:border-blue-7 hide-number-input-buttons outline-none bg-zinc-2"
                  />
                  {methods.formState.errors.card_number && (
                    <p className="text-right capitalize mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 absolute right-0">
                      {methods.formState.errors?.card_number.message}
                    </p>
                  )}
                </div>
                <div className="flex gap-3 justify-between">
                  <div className="w-fit relative">
                    <Input
                      name="expiry_date"
                      type="tel"
                      placeholder="MM/YY"
                      id="expiry_date"
                      maxLength={5}
                      extraStyle="mobile:w-[100%] tablet:w-[116px] pc:w-[145px] rounded-full border-2 pc:hover:border-blue-7 hide-number-input-buttons outline-none bg-zinc-2"
                    />
                    {methods.formState.errors.expiry_date && (
                      <p className="text-right text-nowrap mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 pr-1 absolute right-0 capitalize">
                        {methods.formState.errors?.expiry_date.message}
                      </p>
                    )}
                  </div>
                  <div className="w-fit relative">
                    <Input
                      name="cvv"
                      type="tel"
                      placeholder="CVV"
                      id="cvv"
                      maxLength={3}
                      extraStyle="mobile:w-[100%] tablet:w-[116px] pc:w-[145px] rounded-full border-2 pc:hover:border-blue-7 hide-number-input-buttons outline-none bg-zinc-2"
                    />
                    {methods.formState.errors.cvv && (
                      <p className="text-right text-nowrap mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 pr-1 absolute right-0 capitalize">
                        {methods.formState.errors?.cvv.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile:text-center tablet:gap-3 pc:gap-7 tablet:flex justify-end">
              <p className="capitalize text-[14px] font-bold mobile:mb-2">
                Amount
              </p>
              <div className="relative tablet:w-fit">
                <div className="flex mobile:w-[100%] tablet:w-[240px] pc:w-[300px] rounded-full border-2 pc:hover:border-blue-7 justify-between items-center pl-3 bg-zinc-2">
                  <p className="font-bold text-zinc-9">NGN</p>
                  <Input
                    name="top_up"
                    type="number"
                    placeholder="Amount"
                    id="top_up"
                    extraStyle="rounded-r-full bg-zinc-2 hide-number-input-buttons outline-none text-right border-none"
                  />
                </div>
                {methods.formState.errors.top_up && (
                  <p className="text-right mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 capitalize absolute text-nowrap right-0">
                    {methods.formState.errors?.top_up.message}
                  </p>
                )}
              </div>
            </div>
            <button className="mt-2 w-full place-self-end py-4 bg-blue-6 text-zinc-0 rounded-full capitalize font-bold tablet:w-[240px] pc:w-[300px]">
              <span
                className={`loader ${!isLoading ? "hidden" : "inline-block"}`}
              ></span>
              <p className={`${isLoading ? "hidden" : "block"}`}>top up now</p>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
