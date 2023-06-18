import { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const {
    data: { habits },
  } = useContext(DataContext);
  const unArchivedHabits = habits.filter(({ isArchived }) => !isArchived);

  return (
    <section className="flex-row wrap gap-10 max-width-50 flex-center">
        <HabitCard isNew />
      {unArchivedHabits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </section>
  );
};

export default Home;
