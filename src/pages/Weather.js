import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const apiKey = "9057c725ceb59fb4810e2f46a4d52def";
  const [weather, setWeather] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;

    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);

        setWeather(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getWeatherDetails("İzmir");
  });
  return (
    <div className=" flex flex-col items-center justify-center">
      <div>
        <h1>Clock</h1>
      </div>
      <div className="border border-solid rounded w-full text-center bg-sky-700 ">
        <p>{weather?.name}</p>
        <p>{(weather?.main?.temp - 273.15).toFixed(2)}°C</p>
        <p>{weather?.weather?.[0]?.main}</p>
      </div>
    </div>
  );
};

export default Weather;
