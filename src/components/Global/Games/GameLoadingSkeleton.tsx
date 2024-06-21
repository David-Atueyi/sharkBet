import { useMatchesFromDataBase } from "../../base/store/useMatchesFromDataBase";
import { GamesLodingSkeletonTemplate } from "./GamesLodingSkeletonTemplate";

export const GameLoadingSkeleton = () => {
    const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
        matchesFromDataBase: state.matchesFromDataBase,
      }));
      return (
        <div
          className={` ${
            matchesFromDataBase.length > 0 ? "hidden" : "block"
          }`}
        >
          <div>
            {Array.from({ length: 5 }).map((_, index) => (
              <GamesLodingSkeletonTemplate key={index} />
            ))}
          </div>
        </div>
      );
}
