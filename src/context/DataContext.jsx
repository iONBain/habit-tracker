import { createContext, useEffect, useReducer } from "react";
import { habits } from "../data/data";
import { dataReducer, initialState } from "./DataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const setHabits = () => {
    dispatch({
      type: "SET_HABITS",
      payload: habits,
    });
  };
  // useEffect(()=>console.log(state),[state])
  useEffect(() => {
    setHabits();
  }, []);
  return (
    <DataContext.Provider value={{ data: state, dataDispatch: dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
