import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const EyeOpenIcon = ({
  extraStyle,
  onClick,
}: {
  extraStyle?: string;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} className={` ${extraStyle}`}>
      <FontAwesomeIcon icon={faEye} />
    </div>
  );
};
