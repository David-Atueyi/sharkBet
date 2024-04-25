import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const LeftHeroImageArrow = () => {
  return (
    <div className=" flex items-center">
      <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-zinc-0" />
    </div>
  );
};
