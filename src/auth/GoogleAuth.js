//icons
import { FcGoogle } from "react-icons/fc";
//Toast
import { toast } from "react-toastify";
//Firebase
import { auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
// Firaebase Google
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

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
const GoogleAuth = () => {
  return (
    <div>
      {" "}
      <div
        onClick={googleLogin}
        className=" cursor-pointer bg-gray-300 flex items-center justify-center border border-solid rounded-2xl p-2 "
      >
        {" "}
        <FcGoogle />
        <p className="pl-2 text-lg">Google İle Giriş Yap</p>
      </div>
    </div>
  );
};

export default GoogleAuth;
