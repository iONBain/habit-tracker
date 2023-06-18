import { Route, Routes } from "react-router-dom";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddNewHabit from "./components/AddNewHabit";
import { DataContext } from "./context/DataContext";
import { useContext } from "react";

function App() {
  const {
    data: { editHabit }
  } = useContext(DataContext);
  return (
    
    <div className={`App` }>
      <Header/>
      <AddNewHabit />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
