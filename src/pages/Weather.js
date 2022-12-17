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

  // const [coords, setCoords] = useState(null);
  // const [current, setCurrent] = useState({
  //   temp_c: "",
  //   icon: "",
  //   feelslike_c: "",
  // });
  // const [location, setLocation] = useState({
  //   name: "",
  //   region: "",
  //   country: "",
  //   localtime: "",
  // });

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     console.log("Geolocation is not supported by your browser");
  //   } else {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setCoords(`${position.coords.latitude},${position.coords.longitude}`);
  //       console.log(position.coords);
  //     });
  //   }
  // };

  // const API_TOKEN = "d0ffdd65d4df418b9c1144641221412";

  // useEffect(() => {
  //   const apiURL = `https://api.weatherapi.com/v1/current.json?key=${API_TOKEN}&q=${coords}&aqi=no`;
  //   axios(apiURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrent({
  //         temp_c: data.current.temp_c,
  //         icon: data.current.condition.icon,
  //         feelslike_c: data.current.feelslike_c,
  //       });
  //       setLocation({
  //         name: data.location.name,
  //         region: data.location.region,
  //         country: data.location.country,
  //         localtime: data.location.localtime,
  //       });
  //       console.log(data);
  //     });
  // }, [coords]);
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
    setLoading(true);
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${API_TOKEN}&q=${coords}&aqi=no`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setCurrent({
          temp: data.current.temp_c,
          icon: data.current.condition.icon,
          feelslike_c: data.current.feelslike_c,
        });
        setLocation({
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
          localtime: data.location.localtime,
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
      <div className="border border-solid rounded w-full text-center bg-sky-700 ">
        <button className="button" onClick={getLocation}>
          Hava Durumunu Getir
        </button>
        {!loading && (
          <div>
            <div className="weather">
              <img src={current.icon} alt="Weather" />
              <div>
                Sıcaklık
                <span>{current.temp}</span>
              </div>
              <div>
                Hissedilen
                <span>{current.feelslike_c}</span>
              </div>
            </div>
            <div>
              <div className="location">
                <span>{location.name}</span> - <span>{location.region}</span> -{" "}
                <span>{location.country}</span>
              </div>
              <div>
                <span className="time">{location.localtime}</span>
              </div>
            </div>
          </div>
        )}
        {loading && (
          <div className="loading">
            <span>Yükleniyor...</span>
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
