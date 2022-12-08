import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
//Pages
import Auth from "./pages/Auth";
import Home from "./pages/Home";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </div>
  );
}

export default App;
