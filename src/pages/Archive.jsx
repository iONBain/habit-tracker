import { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { DataContext } from "../context/DataContext";

const Archive = () => {
  const {
    data: { habits },
  } = useContext(DataContext);
  const archivedHabits = habits.filter(({ isArchived }) => isArchived);

  return (
    <section className="flex-row wrap gap-10 max-width-50 flex-center">
      {archivedHabits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </section>
  );
};

export default Archive;
