

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const EyeCloseIcon = ({ extraStyle,onClick }: { extraStyle?: string,onClick?:()=>void }) => {
  return (
    <div onClick={onClick} className={` ${extraStyle}`}>
      <FontAwesomeIcon icon={faEyeSlash} />
    </div>
  );
};
