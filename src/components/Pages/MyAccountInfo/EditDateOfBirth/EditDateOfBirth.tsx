import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../Global/FormContent/Input";
import { ChevronRight } from "../../../Global/Icons/ChevronRight";
import { editDateOfBirthValidator } from "./editDateOfBirthValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import { Calendar } from "../../../Global/Icons/Calendar";
import { useToggleUserInfoForms } from "../../../base/store/useToggleUserInfoForms";

interface FormData {
  old_date_of_birth: string;
  new_date_of_birth: string;
}

export const EditDateOfBirth = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(editDateOfBirthValidator),
  });

 const { toggleUserInfoForms, setToggleUserInfoForms } = useToggleUserInfoForms(
   (state) => ({
     toggleUserInfoForms: state.toggleUserInfoForms,
     setToggleUserInfoForms: state.setToggleUserInfoForms,
   })
 );
  
  const isFormOpen = toggleUserInfoForms.date_of_birth;

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    methods.reset();
  };

   const toggleForm = () => {
     setToggleUserInfoForms({
       user_name: false,
       password: false,
       date_of_birth: !isFormOpen,
     });
   };

  return (
    <>
      <div
        className={`flex justify-between items-center border-b-zinc-6 pb-3 border-b-2`}
      >
        <div className="flex items-center gap-1 capitalize">
          <Calendar extraStyle="fill-blue-6" />
          <p className="text-[15px]">Date Of Birth</p>
        </div>
        <button
          onClick={toggleForm}
          className="text-zinc-4 text-[14px] flex items-baseline gap-1"
        >
          <p>Edit</p>{" "}
          <ChevronRight
            extraStyle={`text-[12px] ${
              isFormOpen
                ? "rotate-90 transition-all duration-200 ease-linear delay-50"
                : "rotate-0 transition-all duration-200 ease-linear delay-50"
            }`}
          />
        </button>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className={`flex flex-col gap-2 rounded-b-lg border-zinc-6 ${
            isFormOpen
              ? " max-h-screen transition-all duration-700 ease-linear delay-150 border-b-2 border-x-2"
              : " max-h-0 transition-all duration-500 ease-linear delay-50  overflow-hidden"
          }`}
        >
          <div
            className={`px-3 pt-2 ${
              isFormOpen
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-200 ease delay-300"
            }`}
          >
            <label
              className="capitalize text-zinc-0"
              htmlFor="old_date_of_birth"
            >
              old date of birth
            </label>
            <Input
              name="old_date_of_birth"
              type="date"
              placeholder="old date of birth"
              id="old_date_of_birth"
              extraStyle="w-[100%]"
            />
            {methods.formState.errors.old_date_of_birth && (
              <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
                {methods.formState.errors?.old_date_of_birth.message}
              </p>
            )}
          </div>
          <div
            className={`px-3 ${
              isFormOpen
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-200 ease delay-300"
            }`}
          >
            <label
              className="capitalize text-zinc-0"
              htmlFor="new_date_of_birth"
            >
              new date of birth
            </label>
            <Input
              name="new_date_of_birth"
              type="date"
              placeholder="new date of birth"
              id="new_date_of_birth"
              extraStyle="w-[100%]"
            />
            {methods.formState.errors.new_date_of_birth && (
              <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
                {methods.formState.errors?.new_date_of_birth.message}
              </p>
            )}
          </div>
          <button
            className={`bg-blue-7 p-2 mx-3 mb-2 capitalize font-bold mobile:w-[40%] tablet:w-[19%] rounded place-self-end ${
              isFormOpen
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-300 ease delay-500"
            }`}
          >
            submit
          </button>
        </form>
      </FormProvider>
    </>
  );
};
