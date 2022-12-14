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
            <SwiperSlide key={index}>
              <a className="text-center mt-2 mb-2" href={data.url}>
                {data.title}

                <img
                  className="rounded-xl "
                  src={data.urlToImage}
                  width={600}
                  height={600}
                  alt=""
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
