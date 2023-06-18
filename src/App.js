import { Route, Routes } from "react-router-dom";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddNewHabit from "./components/AddNewHabit";

function App() {
  return (
    <div className={`App` }>
      <Header/>
      <AddNewHabit/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
