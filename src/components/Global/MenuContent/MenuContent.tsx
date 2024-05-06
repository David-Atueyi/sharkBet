import { Link } from "react-router-dom";
import { BallIcon } from "../Icons/BallIcon";
import All from "../../base/dummyDatas/allMatches.json";


export const MenuContent = () => {
  const getMatchesCountByCountry = ( countryData:string ) => {
    return All.filter((match) => match.country === countryData).length;
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="bg-zinc-8 rounded-[20px]">
        <h1 className="text-4xl font-extrabold p-2 px-4">
          <span>pop</span>
          <span className="text-blue-7">ular</span>
        </h1>
        <div className="font-bold text-sm capitalize mt-2">
          <p>
            <Link
              to={`/Games/&?identifier=08/04`}
              className=" p-2 hover:bg-blue-7/20 hover:text-blue-5 block px-4"
            >
              today matches
            </Link>
          </p>
          <p>
            <Link
              to={`/Games/&?identifier=09/04`}
              className=" p-2 hover:bg-blue-7/20 hover:text-blue-5 block px-4"
            >
              tomorrow matches
            </Link>
          </p>
          <p>
            <Link
              to={`/Games/&?identifier=10/04`}
              className="p-2 hover:bg-blue-7/20 hover:text-blue-5 rounded-b-[20px] block px-4"
            >
              Next 3 days matches
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-zinc-8 rounded-[20px] uppercase text-sm">
        <div className="bg-gradient-to-r from-blue-8 p-3 rounded-t-[20px] flex items-center gap-[3px]">
          <BallIcon />
          <p>soccer</p>
        </div>
        <div className="mt-2">
          <div className="pr-2">
            <Link
              to={`/Games/&?identifier=allLeagues`}
              className="py-3 pl-8 hover:text-blue-7 flex justify-between pr-2"
            >
              <span>top league</span>
              <span>{All.length}</span>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to={`/Games/&?identifier=England`}
              className="py-3 pl-8 hover:text-blue-7 flex justify-between pr-2"
            >
              <span>england</span>
              <span>{getMatchesCountByCountry("England")}</span>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to={`/Games/&?identifier=Spain`}
              className="py-3 pl-8 hover:text-blue-7 flex justify-between pr-2"
            >
              <span>spain</span>
              <span>{getMatchesCountByCountry("Spain")}</span>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to={`/Games/&?identifier=Italy`}
              className="py-3 pl-8 hover:text-blue-7 flex justify-between pr-2"
            >
              <span>italy</span>
              <span>{getMatchesCountByCountry("Italy")}</span>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to={`/Games/&?identifier=France`}
              className="py-3 pl-8 hover:text-blue-7 flex justify-between pr-2"
            >
              <span>french</span>
              <span>{getMatchesCountByCountry("France")}</span>
            </Link>
          </div>
          <div className="pr-2">
            <Link
              to={`/Games/&?identifier=Germany`}
              className="py-3 pl-8 hover:text-blue-7 flex justify-between pr-2"
            >
              <span>germany</span>
              <span>{getMatchesCountByCountry("Germany")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
