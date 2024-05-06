import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const CaretDown = ({ extraStyle }: { extraStyle?: string }) => {
  return (
    <div className={`p-0.5 text-center ${extraStyle}`}>
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
};
