import React from "react";
import News from "../pages/News";
import Weather from "../pages/Weather";

const Home = ({ users }) => {
  return (
    <div>
      <div className="flex items-center justify-center text-xl ">
        Hoşgeldiniz
        <span className="font-bold ml-2">{users?.email}</span>
      </div>
      <div>
        <Weather />
      </div>
      <div>
        <News />
      </div>
    </div>
  );
};

export default Home;
