import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const News = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=tr&apiKey=89c5ca427aad4671bcefc778642a554c
    `
      )
      .then((res) => {
        setDatas(res.data.articles);
      });
  });

  return (
    <div className=" flex flex-col items-center justify-center">
      <div>
        {datas.map((data, index) => (
          <ul key={index}>
            <li>
              <img src={data.urlToImage} alt="" />
            </li>
          </ul>
        ))}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default News;
