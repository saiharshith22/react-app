import { useState } from "react";
import "./App.css";
import demonSlayerImg from "./assets/demon_slayer.jpeg";
import CourseGoalList from "./components/addgoals-app/CourseGoalList";
import Header from "./components/addgoals-app/Header";
import NewGoal from "./components/addgoals-app/NewGoal";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: demonSlayerImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
