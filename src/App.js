import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate exact from="/" to="/journey" />} />
        <Route path="/journey" element={<Navigation tabIndex="1" />} />
        <Route path="/roles/:roleId" element={<Navigation tabIndex="2" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
