import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ChevronUp = ({ extraStyle }: { extraStyle?: string }) => {
  return (
    <div className={`p-0.5 text-center ${extraStyle}`}>
      <FontAwesomeIcon icon={faChevronUp} />
    </div>
  );
};
