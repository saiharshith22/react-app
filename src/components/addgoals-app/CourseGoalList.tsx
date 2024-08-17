import React, { FC, ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalType } from "../../App";
import Infobox from "./Infobox";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};
const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return (
      <Infobox mode="hint">
        You have no course goals yet. Start adding some!
      </Infobox>
    );
  }
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <Infobox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </Infobox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
