import React from "react";

const Home = ({ users }) => {
  return (
    <div className="flex items-center justify-center text-xl ">
      Hoşgeldiniz
      <span className="font-bold ml-2">{users?.email}</span>
    </div>
  );
};

export default Home;
