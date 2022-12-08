import React from "react";

const Navbar = () => {
  return (
    <div className="bg-sky-700 h-12 text-white flex items-center justify-between p-3  ">
      <div className="text-2xl font-bold ">Logo</div>
      <div className="cursor-pointer pr-4">Logout</div>
    </div>
  );
};

export default Navbar;
