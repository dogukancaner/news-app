import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import GoogleAuth from "../auth/GoogleAuth";
import { auth } from "../firebase";

const Auth = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = async () => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      const user = data.user;
      if (user) {
        window.location = "/dashboard";
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="max-w-lg w-full flex flex-col">
        <h2 className="text-center pb-4 font-bold text-2xl">Giriş Yap</h2>
        <input
          name="email"
          value={authData.email}
          onChange={onChangeFunc}
          className="p-2.5 m-2 outline-none text-base border border-solid border-gray-300 rounded-md "
          type="email"
          placeholder="E-mail Giriniz"
        />
        <input
          name="password"
          value={authData.password}
          onChange={onChangeFunc}
          className="p-2.5 m-2 outline-none text-base border border-solid border-gray-300 rounded-md"
          type="password"
          placeholder="Parola Giriniz"
        />
        <GoogleAuth />
        <span className="cursor-pointer text-blue-600 font-bold ">
          <Link to="/signup">Yeni Hesap Oluştur</Link>
        </span>
        <button
          className="border border-solid p-2 text-lg text-center rounded-2xl mt-2 bg-blue-600 cursor-pointer text-white "
          onClick={authFunc}
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Auth;
