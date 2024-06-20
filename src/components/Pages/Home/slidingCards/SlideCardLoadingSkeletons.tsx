import { useMatchesFromDataBase } from "../../../base/store/useMatchesFromDataBase";
import { SlideCardLoadingSkeletonTemplate } from "./SlideCardLoadingSkeletonTemplate";

export const SlideCardLoadingSkeletons = () => {
  const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
    matchesFromDataBase: state.matchesFromDataBase,
  }));
  return (
    <div
      className={`overflow-hidden ${
        matchesFromDataBase.length > 0 ? "hidden" : "block"
      }`}
    >
      <div className="grid grid-cols-4 w-[1150px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <SlideCardLoadingSkeletonTemplate key={index} />
        ))}
      </div>
    </div>
  );
};
