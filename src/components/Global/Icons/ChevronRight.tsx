import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ChevronRight = ({ extraStyle }: { extraStyle?: string }) => {
  return (
    <div className={`p-0.5 text-center ${extraStyle}`}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};
