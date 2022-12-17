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

  const API_TOKEN = "d0ffdd65d4df418b9c1144641221412";
  const [loading, setLoading] = useState(null);
  const [coords, setCoords] = useState(null);
  const [current, setCurrent] = useState({
    temp_c: "",
    icon: "",
    feelslike_c: "",
  });
  const [location, setLocation] = useState({
    name: "",
    country: "",
    region: "",
    localtime: "",
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation yok");
    } else {
      setLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
  };

  useEffect(() => {
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${API_TOKEN}&q=${coords}&aqi=no`;
    axios.get(apiURL).then((res) => {
      setCurrent({
        temp: res.data.current.temp_c,
        icon: res.data.current.condition.icon,
        feelslike_c: res.data.current.feelslike_c,
      });
      setLocation({
        name: res.data.location.name,
        region: res.data.location.region,
        country: res.data.location.country,
        localtime: res.data.location.localtime,
      });
      setLoading(false);
    });
  }, [coords]);

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="border-solid border-2 border-sky-700 p-4 mt-4 mb-4 font-bold text-xl rounded-2xl">
        <span className="border-r-2 border-sky-700 pr-4 mr-4 ">
          {currentDate}
        </span>
        <span className="">{currentTime}</span>
      </div>
      <div className=" w-full text-center border-2 border-solid border-sky-700 p-4 rounded-md">
        <button
          className="button cursor-pointer bg-sky-700 text-white text-lg p-2 border-2 border-solid "
          onClick={getLocation}
        >
          Hava Durumunu Göster
        </button>
        {!loading && (
          <div className="text-lg">
            <div className="flex flex-col items-center justify-center">
              <img src={current.icon} alt="" />
              <span>
                {" "}
                <b>Sıcaklık:</b> {current.temp}°C
              </span>
              <span>
                {" "}
                <b>Hissedilen Sıcaklık:</b> {current.feelslike_c}°C
              </span>
            </div>
            <div className="">
              {" "}
              <b>Konum: </b>
              <span>{location.name}</span> - <span>{location.region}</span> -{" "}
              <span>{location.country}</span>
            </div>
          </div>
        )}
        {loading && (
          <div className="loading">
            <span className="font-bold">Yükleniyor...</span>
          </div>
        )}
        {/* <button className="text-2xl font-bold text-white" onClick={getLocation}>
          Hava Durumunu Göster
        </button>
        <div>
          <img src={current.icon} alt="" />
          <span>{current.temp_c}</span>
          <span>{current.feelslike_c}</span>
        </div>
        <div>
          <span>{location.name}</span>
          <span>{location.region}</span>
          <span>{location.country}</span>
          <span>{location.localtime}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Weather;
