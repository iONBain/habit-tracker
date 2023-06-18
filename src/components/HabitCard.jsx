import { useContext } from "react"
import Actions from "./Actions"
import "./components.css"
import { DataContext } from "../context/DataContext"

const HabitCard = ({habit, isNew}) => {
    const {dataDispatch} = useContext(DataContext)
    const handleNewHabit = () => {
        // console.log("je")
        dataDispatch({
            type: "SET_SHOW_POPUP",
            payload:true
        })
    }
    return (
        isNew ? <section className="habit-card flex-center " onClick={handleNewHabit}> <h3> <span className="accent">  + Add</span> New Habit</h3> </section>: 
        <section className="habit-card">
            <Actions habit={habit}/>
            <h3>
            {habit.title}

            </h3>
            <p className="grey">
            Start:
            {habit.startDate}
            </p>
            <p className="grey">
            Goal:
            {habit.goal}
            </p>
        </section>
    )
}

export default HabitCard