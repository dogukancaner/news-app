import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
//Pages
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./auth/SignUp";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [users, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
      }
    });
  });
  return (
    <div>
      <BrowserRouter>
        {users && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="/" element={<Auth />} /> */}
          <Route path="dashboard" element={<Home users={users} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={35000} theme="light" />
    </div>
  );
}

export default App;
