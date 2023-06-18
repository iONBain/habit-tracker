import { useContext, useEffect, useRef, useState } from "react";
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
    data: { habits, showPopup, editHabit, onEdit },
    dataDispatch,
  } = useContext(DataContext);
  const [formHabit, setFormHabit] = useState(
    editHabit || {
      title: "",
      timeOfDay: "",
      goal: "",
      startDate: "",
      repeat: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormHabit((prev) => ({
      ...[prev],
      [name]: value,
    }));
  };
  const handleClose = () => {
    dataDispatch({
      type: "SET_SHOW_POPUP",
      payload: false,
    });
    dataDispatch({
      type: "SET_ON_EDIT",
      payload: true,
    });
  };
  const handleSubmit = () => {
    const habitData = onEdit
      ? formHabit
      : {
          id: habits.length + 1,
          ...formHabit,
        };
    dataDispatch({
      type: "ADD_HABIT",
      payload: habitData,
      editType: onEdit,
    });
    dataDispatch({
      type: "SET_SHOW_POPUP",
      payload: false,
    });
  };
  const handleEdit = () => {
    if (onEdit) {
      setFormHabit(editHabit);
    } else {
      setFormHabit({
        title: "",
        timeOfDay: "",
        goal: "",
        startDate: "",
        repeat: "",
      });
    }
  };
  useEffect(() => {
    handleEdit();
  }, [onEdit]);
  return (
    <div className={`${!showPopup && "display-none"}`}>
      <section className={`add-new-main`}>
        <FaWindowClose className="btn-close" onClick={handleClose} />
        <form className="flex-column gap-20 form">
          {/* row 1 */}
          <label htmlFor="habitName" className="gap-10 flex-column">
            <p> Name: </p>
            <input
              value={formHabit.title}
              id="habitName"
              placeholder="Enter Habit name ..."
              type="text"
              onChange={handleChange}
              name="title"
            />
          </label>

          {/* row 2 */}
          <section className="flex-row gap-10 sp-bw">
            <label htmlFor="habitRepeat" className="gap-10 flex-column">
              <p> Repeat: </p>
              <select
                name="habitRepeat"
                id="habitRepeat"
                value={formHabit.repeat}
                onChange={handleChange}
              >
                {optionsRepeat.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="habitRepeat" className="gap-10 flex-column">
              <p> Goal: </p>
              <select
                name="habitRepeat"
                id="habitRepeat"
                value={formHabit.goal}
                onChange={handleChange}
              >
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
              <select
                name="habitRepeat"
                id="habitRepeat"
                value={formHabit.timeOfDay}
                onChange={handleChange}
              >
                {optionsTimeOfDay.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="habitRepeat" className="gap-10 flex-col">
              <p> Start Date: </p>
              <select
                name="habitRepeat"
                id="habitRepeat"
                value={formHabit.startDate}
                onChange={handleChange}
              >
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
