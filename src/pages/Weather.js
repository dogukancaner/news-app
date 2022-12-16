import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const date = new Date().toLocaleDateString();
  const [currentDate, setCurrentDate] = useState(date);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  };
  setInterval(updateTime, 1000);

  const updateDate = () => {
    const newDate = new Date().toLocaleDateString();
    setCurrentDate(newDate);
  };
  setInterval(updateDate, 1000);

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="border-solid border-2 border-sky-700 p-4 mt-4 mb-4 font-bold text-xl rounded-2xl">
        <span className="border-r-2 border-sky-700 pr-4 mr-4 ">
          {currentDate}
        </span>
        <span className="">{currentTime}</span>
      </div>
      <div className="border border-solid rounded w-full text-center bg-sky-700 ">
        <h1 className="text-2xl font-bold text-white">Hava Durumu</h1>
      </div>
    </div>
  );
};

export default Weather;
