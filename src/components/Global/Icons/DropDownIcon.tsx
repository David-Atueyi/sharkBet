import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

export const DropDownIcon = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="flex items-center" onClick={handleClick}>
      <FontAwesomeIcon icon={faNoteSticky} className="text-xl text-blue-7" />
    </div>
  );
};
