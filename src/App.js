import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
//Pages
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
