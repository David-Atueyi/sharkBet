import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

interface IXIcon {
  extraStyle?: string;
  textStyle?: string;
  handleClick?: () => void;
}

export const XIcon = ({ extraStyle, handleClick, textStyle }: IXIcon) => {
  return (
    <div className={`${extraStyle}`} onClick={handleClick}>
      <FontAwesomeIcon
        icon={faMultiply}
        className={`text-zinc-0 m-2 ${textStyle}`}
      />
    </div>
  );
};
