import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export const FireIcon = ({extraStyle}:{extraStyle:string}) => {
    return (
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faFire}
          className={`${extraStyle}`}
        />
      </div>
    );
};
