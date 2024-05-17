import { useFormContext } from "react-hook-form";
import { useTogglePassword } from "../../base/hooks/useTogglePassWord";
import { IAuthFormInput } from "../../base/interface/IAuthFormInput";
import { EyeOpenIcon } from "../Icons/EyeOpenIcon";
import { EyeCloseIcon } from "../Icons/EyeCloseIcon";

export const Input = ({
  type,
  placeholder,
  name,
  id,
  extraStyle,
  maxLength,
  togglePasswordExtraStyle,
}: IAuthFormInput) => {
  //
  const { register } = useFormContext();

  const { togglePasswordVisibility, passwordVisibility } = useTogglePassword();

  return (
    <div className={`relative`}>
      <input
        type={passwordVisibility ? "text" : type}
        placeholder={placeholder}
        className={`px-3 py-2 bg-gray-100 w-full border rounded text-zinc-9 ${extraStyle}`}
        id={id}
        maxLength={maxLength}
        {...register(name)}
      />
      {type === "password" ? (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={`absolute right-3 top-2 ${togglePasswordExtraStyle}`}
        >
          {passwordVisibility ? (
            <EyeOpenIcon extraStyle="text-zinc-6" />
          ) : (
            <EyeCloseIcon extraStyle="text-zinc-6" />
          )}
        </button>
      ) : null}
    </div>
  );
};
