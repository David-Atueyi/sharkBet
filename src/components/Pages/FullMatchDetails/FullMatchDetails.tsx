import { useSearchParams } from "react-router-dom";

export const FullMatchDetails = () => {

     const [query] = useSearchParams();
     const gameId = query.get("gameId");

  return (
    <div className="w-[57%] mobile:w-full tablet:w-[81%] pc:w-[57%]">
      FullMatchDetails
    </div>
  );
}
