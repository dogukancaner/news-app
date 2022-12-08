import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvIeC8u4Qr-8NjnavQwN0B-vu_YrGh6jo",
  authDomain: "fir-news-app-7a631.firebaseapp.com",
  projectId: "fir-news-app-7a631",
  storageBucket: "fir-news-app-7a631.appspot.com",
  messagingSenderId: "364506988933",
  appId: "1:364506988933:web:02c9791e8917b6218904ec",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
