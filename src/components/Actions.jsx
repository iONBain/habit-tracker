import { useContext } from "react";
import { FaDownload, FaPen, FaTrash } from "react-icons/fa";
import { DataContext } from "../context/DataContext";

const Actions = ({ habit }) => {
  const { dataDispatch } = useContext(DataContext);
  const handleEdit = () => {
    dataDispatch({
      type: "SET_EDIT_HABIT",
      payload: habit,
    });
    dataDispatch({
      type: "SET_SHOW_POPUP",
      payload: true,
    });
    dataDispatch({
      type: "SET_ON_EDIT",
      payload: false,
    });
    dataDispatch({
      type: "SET_ON_EDIT",
      payload: true,
    });
  };
  const handleArchive = () => {
    console.log(habit.id)
    dataDispatch({
      type:"ARCHIVE_HABIT",
      payload:habit.id
    })
  };
  const handleDelete = () => {
    dataDispatch({
      type:"DELETE_HABIT",
      payload:habit.id
    })
  };
  return (
    <div className="action-main">
      <FaPen onClick={handleEdit} />
      <FaTrash onClick={handleDelete} />
      <FaDownload onClick={handleArchive } />
    </div>
  );
};

export default Actions;
