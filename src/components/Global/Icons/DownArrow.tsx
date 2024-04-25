import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const DownArrow = () => {
  return (
    <div className="p-0.5 text-center text-sm">
      <FontAwesomeIcon icon={faChevronDown} className="text-zinc-0" />
    </div>
  );
};
