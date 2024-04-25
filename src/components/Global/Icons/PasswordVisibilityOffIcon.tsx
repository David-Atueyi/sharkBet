import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const PasswordVisibilityOffIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEyeSlash} className="text-sm text-zinc-6" />
    </div>
  );
};
