import { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const {
    data: { habits },
  } = useContext(DataContext);
  const unArchivedHabits = habits.filter(({ isArchived }) => !isArchived);

  return (
    <section>
      {unArchivedHabits.map((habit) => (
        <HabitCard habit={habit} />
      ))}
    </section>
  );
};

export default Home;
