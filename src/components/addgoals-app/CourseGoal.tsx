import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: (id: number) => void;
  id: number;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children, onDelete, id }) => {
  return (
    <div>
      <h2>{title} </h2>
      {children}&nbsp;
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default CourseGoal;
