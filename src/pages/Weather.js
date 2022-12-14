import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState([]);

  return (
    <div className=" bg-red-600 flex flex-col items-center justify-center">
      <div>
        <h1>Clock</h1>
      </div>
      <div>
        <h1>Weather</h1>
      </div>
    </div>
  );
};

export default Weather;
