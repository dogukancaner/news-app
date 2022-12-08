import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { auth } from "../firebase";
//Google
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Auth = () => {
  const [signup, setSignup] = useState(true);
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = async () => {
    if (signup) {
      try {
        const data = await createUserWithEmailAndPassword(
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
    } else {
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
    }
  };
  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential.accessToken;
      const user = data.user;
      if (user) {
        window.location = "/dashboard";
      }
    } catch (error) {
      const creadential = GoogleAuthProvider.credentialFromError(error);
      toast.error(creadential);
    }
  };
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="max-w-lg w-full flex flex-col">
        <h2 className="text-center pb-4 font-bold text-2xl">
          {signup ? "Kayıt Ol" : "Giriş Yap"}
        </h2>
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
        <div
          onClick={googleLogin}
          className=" cursor-pointer bg-gray-300 flex items-center justify-center border border-solid rounded-2xl p-2 "
        >
          {" "}
          <FcGoogle />
          <p className="pl-2 text-lg">Google İle Giriş Yap</p>
        </div>
        <span
          className="cursor-pointer text-blue-600 font-bold "
          onClick={() => setSignup(!signup)}
        >
          {signup ? "Hesabına Giriş Yap" : "Yeni Hesap Aç"}
        </span>
        <button
          className="border border-solid p-2 text-lg text-center rounded-2xl mt-2 bg-blue-600 cursor-pointer text-white "
          onClick={authFunc}
        >
          {signup ? "Kayıt ol" : "Giriş Yap"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
