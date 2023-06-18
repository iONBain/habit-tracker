import Actions from "./Actions"
import "./components.css"

const HabitCard = ({habit}) => {
    return (
        <section className="habit-card">
            <Actions/>
            <h3>
            {habit.title}

            </h3>
            <p className="grey">
            Frequency:
            {habit.goal}
            </p>
        </section>
    )
}

export default HabitCard