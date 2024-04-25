import { useFormContext } from "react-hook-form";
import { useTogglePassword } from "../../base/hooks/useTogglePassWord";
import { IAuthFormInput } from "../../base/interface/IAuthFormInput";
import { PasswordVisibilityIcon } from "../Icons/PasswordVisibilityIcon";
import { PasswordVisibilityOffIcon } from "../Icons/PasswordVisibilityOffIcon";

export const Input = ({
  type,
  placeholder,
  name,
  id,
  extraStyle,
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
        {...register(name)}
      />
      {type === "password" ? (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={`absolute right-3 top-2 ${togglePasswordExtraStyle}`}
        >
          {passwordVisibility ? (
            <PasswordVisibilityIcon />
          ) : (
            <PasswordVisibilityOffIcon />
          )}
        </button>
      ) : null}
    </div>
  );
};

// sm:w-[350px]
