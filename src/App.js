import { Route, Routes } from "react-router-dom";
import Archive from "./pages/Archive";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
