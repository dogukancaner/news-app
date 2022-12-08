import React from "react";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="max-w-lg w-full flex flex-col">
        <h2 className="text-center pb-4 font-bold text-2xl">Giriş Yap</h2>
        <input
          className="p-2.5 m-2 outline-none text-base border border-solid border-gray-300 rounded-md "
          type="email"
          placeholder="E-mail Giriniz"
        />
        <input
          className="p-2.5 m-2 outline-none text-base border border-solid border-gray-300 rounded-md"
          type="password"
          placeholder="Parola Giriniz"
        />
        <div className=" cursor-pointer bg-gray-300 flex items-center justify-center border border-solid rounded-2xl p-2 ">
          {" "}
          <FcGoogle />
          <p className="pl-2 text-lg">Google İle Giriş Yap</p>
        </div>
        <span className="cursor-pointer text-blue-600 font-bold ">
          Yeni Hesap Oluştur
        </span>
        <button className="border border-solid p-2 text-lg text-center rounded-2xl mt-2 bg-blue-600 cursor-pointer text-white ">
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Auth;
