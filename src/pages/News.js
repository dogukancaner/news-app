import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=tr&apiKey=89c5ca427aad4671bcefc778642a554c
    `
      )
      .then((res) => {
        setData(res.data.articles);
      });
  });

  return (
    <div className=" bg-blue-500 flex flex-col items-center justify-center">
      <div>
        {data.map((item, index) => {
          <div></div>;
        })}
      </div>
      <div>
        <div>Content</div>
      </div>
    </div>
  );
};

export default News;
