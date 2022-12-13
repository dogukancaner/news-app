import { toast } from "react-toastify";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const logoutFunc = async () => {
    toast.success("Çıkış Yapılıyor...");
    await signOut(auth);
    setTimeout(() => {
      window.location = "/";
    }, 2000);
  };

  return (
    <div className="bg-sky-700 h-12 text-white flex  items-center justify-between p-3  ">
      <div className="text-2xl font-bold ">Logo</div>
      <div>
        <div onClick={logoutFunc} className="cursor-pointer pr-4">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
