import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const ChevronLeft = ({ extraStyle }: { extraStyle?: string }) => {
  return (
    <div className={`p-0.5 text-center ${extraStyle}`}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};
