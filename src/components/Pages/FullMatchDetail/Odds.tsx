
import { DoubleChance } from "./Odds/DoubleChance";
import { DrawNoBet } from "./Odds/DrawNoBet";
import { GoalGoalAndNoGoal } from "./Odds/GoalGoalAndNoGoal";
import { OneXTwo } from "./Odds/OneXTwo";
import { OverAndUnder } from "./Odds/OverAndUnder/OverAndUnder";

export const Odds = () => {
    return (
      <div className="px-[20px] flex gap-3 flex-col">
        <OneXTwo />
        <OverAndUnder />
        <DoubleChance />
        <GoalGoalAndNoGoal />
        <DrawNoBet />
      </div>
    );
};
