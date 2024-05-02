import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const ClearBetIcon = ({
  handleClearBet,
}: {
  handleClearBet: () => void;
}) => {
  return (
    <button
      className="p-1 flex justify-end items-center capitalize text-sm w-[118px]"
      onClick={handleClearBet}
    >
      <p>clear all bet</p>
      <FontAwesomeIcon icon={faTrashCan} className="text-zinc-0 m-2" />
    </button>
  );
};
