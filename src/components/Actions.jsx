import { useContext } from "react";
import { FaDownload, FaPen, FaTrash } from "react-icons/fa";
import { DataContext } from "../context/DataContext";

const Actions = ({habit}) => {
    const {dataDispatch} = useContext(DataContext)
    const handleEdit = () => {
        console.log(habit)
        dataDispatch({
            type:"SET_EDIT_HABIT",
            payload:habit
        })

    }
    const handleArchive = () => {
        console.log(habit.id)

    }
    const handleDelete = () => {
        console.log(habit.id)

    }
  return (
    <div className="action-main">
      <FaPen onClick={handleEdit}/>
      <FaTrash onClick={handleArchive}/>
      <FaDownload onClick={handleDelete} />
    </div>
  );
};

export default Actions;
