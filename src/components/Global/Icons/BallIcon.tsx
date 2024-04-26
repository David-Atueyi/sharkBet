import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoccerBall } from "@fortawesome/free-solid-svg-icons";

export const BallIcon = ({ extraStyle }: { extraStyle?: string }) => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon
        icon={faSoccerBall}
        className={`text-lg text-blue-6 ${extraStyle}`}
      />
    </div>
  );
};
