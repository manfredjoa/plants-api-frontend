import { Routes, Route } from "react-router-dom";
import AllSpecies from "./screens/AllSpecies.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllSpecies />} />
      </Routes>
    </div>
  );
}

export default App;
