import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../Global/FormContent/Input";
import { Button } from "../../Global/FormContent/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { depositValidator } from "./depositValidator";
import { IDepositInputs } from "../../base/interface/IDepositInputs";
import { useAccountBalance } from "../../base/store/useAccountBalance";
import { useTransactionHistoryStore } from "../../base/store/useTransactionHistoryStore";
import { formattedDate } from "./date";
import { formattedTime } from "./time";

export const Deposit = () => {
  const methods = useForm<IDepositInputs>({
    resolver: yupResolver(depositValidator),
  });

  const { accountBalance, setAccountBalance } = useAccountBalance((state) => ({
    accountBalance: state.accountBalance,
    setAccountBalance: state.setAccountBalance,
  }));

  const { setTransactionHistory } =
    useTransactionHistoryStore((state) => ({
      setTransactionHistory: state.setTransactionHistory,
    }));
  



  const submitFunction = (data: any) => {
    setAccountBalance(Number(accountBalance) + Number(data.top_up));
    setTransactionHistory(
      Number(data.top_up),
      "Deposits - Transfer",
      formattedDate,
      formattedTime,
      "successful"
    );
    methods.reset();
  };



  return (
    <div className="text-zinc-9 bg-zinc-0 mobile:h-fit mobile:pb-3 tablet:h-[57.6dvh] rounded-[20px]">
      <p className="text-center pt-3 font-bold border-b-4">Bank Card</p>
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
                    extraStyle="mobile:w-[100%] tablet:w-[240px] pc:w-[300px] rounded-full border-2 pc:hover:border-blue-7 hide-number-input-buttons outline-none"
                  />
                  {methods.formState.errors.card_number && (
                    <p className="text-right capitalize mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 absolute right-0">
                      {methods.formState.errors?.card_number.message}
                    </p>
                  )}
                </div>
                <div className="flex gap-3 justify-between">
                  {/*  */}
                  <div className="w-fit relative">
                    <Input
                      name="expiry_date"
                      type="tel"
                      placeholder="MM/YY"
                      id="expiry_date"
                      maxLength={5}
                      extraStyle="mobile:w-[100%] tablet:w-[116px] pc:w-[145px] rounded-full border-2 pc:hover:border-blue-7 hide-number-input-buttons outline-none "
                    />
                    {methods.formState.errors.expiry_date && (
                      <p className="text-right text-nowrap mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 pr-1 absolute right-0 capitalize">
                        {methods.formState.errors?.expiry_date.message}
                      </p>
                    )}
                  </div>
                  {/*  */}
                  <div className="w-fit relative">
                    <Input
                      name="cvv"
                      type="tel"
                      placeholder="CVV"
                      id="cvv"
                      maxLength={3}
                      extraStyle="mobile:w-[100%] tablet:w-[116px] pc:w-[145px] rounded-full border-2 pc:hover:border-blue-7 hide-number-input-buttons outline-none"
                    />
                    {methods.formState.errors.cvv && (
                      <p className="text-right text-nowrap mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 pr-1 absolute right-0 capitalize">
                        {methods.formState.errors?.cvv.message}
                      </p>
                    )}
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="mobile:text-center tablet:gap-3 pc:gap-7 tablet:flex justify-end">
              <p className="capitalize text-[14px] font-bold mobile:mb-2">
                Amount
              </p>
              <div className="relative tablet:w-fit">
                <div className="flex mobile:w-[100%] tablet:w-[240px] pc:w-[300px] rounded-full border-2 pc:hover:border-blue-7 justify-between items-center pl-3 bg-zinc-1">
                  <p>NGN</p>
                  <Input
                    name="top_up"
                    type="number"
                    placeholder="Amount"
                    id="top_up"
                    extraStyle="rounded-r-full hide-number-input-buttons outline-none text-right border-none"
                  />
                </div>
                {methods.formState.errors.top_up && (
                  <p className="text-right mt-1 mobile:text-[10px] tablet:text-sm text-rose-5 capitalize absolute text-nowrap right-0">
                    {methods.formState.errors?.top_up.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              className="mt-2 w-full place-self-end py-3 bg-blue-6 text-zinc-0 rounded-full capitalize font-bold tablet:w-[240px] pc:w-[300px]"
              nameOfButton="top up now"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
