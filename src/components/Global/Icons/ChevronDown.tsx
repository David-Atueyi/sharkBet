import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ChevronDown = ({ extraStyle }: { extraStyle?: string }) => {
  return (
    <div className={`p-0.5 text-center ${extraStyle}`}>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};
