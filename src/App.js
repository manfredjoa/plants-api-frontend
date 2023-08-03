import { Routes, Route } from "react-router-dom";
import AllSpecies from "./screens/AllSpecies.jsx";
import Home from "./screens/Home.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/species" element={<AllSpecies />} />
      </Routes>
    </div>
  );
}

export default App;
