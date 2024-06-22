import { useMatchesFromDataBase } from "../../base/store/useMatchesFromDataBase";

export const LoadingSkeleton = ({
  LodingSkeletonTemplate,extraStyleOne,extraStyleTwo
}: {
  LodingSkeletonTemplate: React.ComponentType;
  extraStyleOne?:string;
  extraStyleTwo?:string;
}) => {
  const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
    matchesFromDataBase: state.matchesFromDataBase,
  }));

  return (
    <div className={`${extraStyleOne} ${matchesFromDataBase.length > 0 ? "hidden" : "block"}`}>
      <div className={`${extraStyleTwo}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <LodingSkeletonTemplate key={index} />
        ))}
      </div>
    </div>
  );
};
