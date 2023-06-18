import { useContext } from "react"
import "./components.css"
import { DataContext } from "../context/DataContext"

const HabitCard = ({habit}) => {
    const {data:{showPopup}} = useContext(DataContext)
    return (
        <section className={`add-new-main" ${!showPopup && "display-none"}`}>
            {habit.title}
            {habit.goal}
        </section>
    )
}

export default HabitCard