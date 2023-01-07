import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import React, { useState } from "react";
import useSWR from "swr";

function News() {
  const [show, setShow] = useState("1");
  const apiKey = process.env.NEXT_PUBLIC_NEWS_KEY;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`,
    fetcher
  );

  const indexNo = show === "1" ? " 3" : show === "2" ? "6" : "10";
  const idNo = show === "1" ? "0" : show === "2" ? "3" : "6";
  //   const cleanIndex = indexNo.replace(/"/g, "");
  //   indexNo.slice(indexNo)
  //   console.log(indexNo);
  const newsTime = (time) => {
    const dateString = time;
    const date = new Date(Date.parse(dateString));
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date);
  };

  return (
    <div>
      <div className="grid grid-cols-2 s:grid-cols-3">
        {data?.articles?.slice(idNo, indexNo).map((item, key) => (
          <div key={key}>
            <div>
              <Image
                src={item?.urlToImage}
                height={200}
                width={200}
                alt="news"
              />
            </div>
            <h6 className="text-xs text-center text-[#e6e0e0] font-semibold">
              {newsTime(item.publishedAt)}
            </h6>
            <h5 className="truncate text-center text-sm font-semibold text-red-500">
              {item.title}
            </h5>
            <h6 className="text-xs text-center">
              <Link href={item.url}>
                <a>
                  Read More <BsArrowRight className="inline text-center" />
                </a>
              </Link>
            </h6>
          </div>
        ))}
      </div>
      <div className="flex gap-5 justify-center mt-10">
        <div
          onClick={() => setShow("1")}
          className={`h-2 w-2 rounded ${
            show === "1" ? "bg-red-600" : "bg-[grey]"
          }`}
        ></div>
        <div
          onClick={() => setShow("2")}
          className={`h-2 w-2 rounded ${
            show === "2" ? "bg-red-600" : "bg-[grey]"
          }`}
        ></div>
        <div
          onClick={() => setShow("3")}
          className={`h-2 w-2 rounded ${
            show === "3" ? "bg-red-600" : "bg-[grey]"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default News;
