import { useEffect, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { data } from "autoprefixer";

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
    <div className="p-10">
      <Swiper
        className="p-4"
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

      <div className=" grid grid-cols-4 gap-4   ">
        {datas.map((data, index) => (
          <div key={index}>
            <a href={data.url}>
              <img
                className="rounded-xl w-full "
                width={1043}
                height={1043}
                src={data.urlToImage}
                alt=""
              />
              <span className="font-bold text-center">{data.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
