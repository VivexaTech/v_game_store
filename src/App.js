import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Library from "./Pages/Library";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Library/" element={<Library />} />
        <Route path="/Library/:gamecat" element={<Library />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
