import { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { DataContext } from "../context/DataContext";

const Archive = () => {
  const {
    data: { habits },
  } = useContext(DataContext);
  const archivedHabits = habits.filter(({ isArchived }) => isArchived);

  return (
    <section>
      {archivedHabits.map((habit) => (
        <HabitCard habit={habit} />
      ))}
    </section>
  );
};

export default Archive;
