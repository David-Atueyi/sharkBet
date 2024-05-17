import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const ClearBetIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="border-t-2 border-zinc-5 text-right flex justify-end cursor-pointer bg-zinc-9 ">
      <button
        onClick={onClick}
        className="p-1 flex justify-end items-center capitalize text-sm w-[118px]"
      >
        <p>clear all bet</p>
        <FontAwesomeIcon icon={faTrashCan} className="text-zinc-0 m-2" />
      </button>
    </div>
  );
};
