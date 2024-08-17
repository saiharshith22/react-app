import { FC, useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // new FormData(e.currentTarget);
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal: </label>
        <input id="goal" type="text" name="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary: </label>
        <input id="summary" type="text" name="summary" ref={summaryRef} />
      </p>
      <button>add goal</button>
    </form>
  );
};

export default NewGoal;
