import { useContext, useRef } from "react";
import "./components.css";
import { DataContext } from "../context/DataContext";
import { FaWindowClose } from "react-icons/fa";
import {
  optionsGoal,
  optionsRepeat,
  optionsStartDate,
  optionsTimeOfDay,
} from "../data/data";

const AddNewHabit = () => {
  const {
    data: { habits,showPopup,editHabit },
    dataDispatch,
  } = useContext(DataContext);
  const nameRef = useRef();
  const repeatRef = useRef();
  const goalRef = useRef();
  const timeOfDayRef = useRef();
  const startDateRef = useRef();

  const handleClose = () => {
    dataDispatch({
      type: "SET_SHOW_POPUP",
      payload: false,
    });
  };
  const handleSubmit = () => {
    const habitData = {
      id: habits.length+1 ,
      title: nameRef.current.value,
      timeOfDay: timeOfDayRef.current.value,
      goal: goalRef.current.value,
      startDate: startDateRef.current.value,
      isArchived: false,
      repeat: repeatRef.current.value,
    };
    dataDispatch({
      type: "ADD_HABIT",
      payload: habitData,
    });
    dataDispatch({
        type:"SET_SHOW_POPUP",
        payload:false
    })
  };

  return (
    <div className={`${!showPopup && "display-none"}`}>
      <section className={`add-new-main`}>
        <FaWindowClose className="btn-close" onClick={handleClose} />
        <form className="flex-column gap-20 form">
          {/* row 1 */}
          <label htmlFor="habitName" className="gap-10 flex-column">
            <p> Name: </p>
            <input
              ref={nameRef}
              id="habitName"
              placeholder="Enter Habit name ..."
              type="text"
            />
          </label>

          {/* row 2 */}
          <section className="flex-row gap-10 sp-bw">
            <label htmlFor="habitRepeat" className="gap-10 flex-column">
              <p> Repeat: </p>
              <select ref={repeatRef} name="habitRepeat" id="habitRepeat">
                {optionsRepeat.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="habitRepeat" className="gap-10 flex-column">
              <p> Goal: </p>
              <select ref={goalRef} name="habitRepeat" id="habitRepeat">
                {optionsGoal.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
          </section>

          {/* row 3 */}
          <section className="flex-row gap-10 sp-bw">
            <label htmlFor="habitRepeat" className="gap-10 flex-col">
              <p> Time of Day: </p>
              <select ref={timeOfDayRef} name="habitRepeat" id="habitRepeat">
                {optionsTimeOfDay.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="habitRepeat" className="gap-10 flex-col">
              <p> Start Date: </p>
              <select ref={startDateRef} name="habitRepeat" id="habitRepeat">
                {optionsStartDate.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
          </section>
        </form>
        <button className="btn" onClick={() => handleSubmit()}>
          {" "}
          Submit
        </button>
      </section>
    </div>
  );
};

export default AddNewHabit;
