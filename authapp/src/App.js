import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Assets from "./components/Assets";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </div>
  );
}

export default App;
