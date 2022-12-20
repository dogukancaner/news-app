import { useEffect, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

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
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {datas.map((data, index) => (
          <SwiperSlide
            key={index}
            className=" flex items-center justify-center"
          >
            <a className="text-center mt-4 font-bold text-xl" href={data.url}>
              {data.title}
              <img
                className="rounded-xl mt-4  "
                src={data.urlToImage}
                width={1043}
                height={1043}
                alt=""
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <ul>
          {datas.map((data, index) => (
            <li className="grid grid-rows-2 gap-4 mt-4" key={index}>
              <img width={1043} height={1043} src={data.urlToImage} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
