import axios from "axios";
import React, { useState } from "react";
import { server } from "../config";
import { useSelector } from "react-redux";
import { FetchedAllItems } from "../slices/StoreData";
import { wrapper } from "../store";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
import Link from "next/link";
import Layout1 from "../components/Layout/Layout1";
import ShoeDB from "../Resources/ShoeDB.json";
import Sliderdata from "../Resources/Sliderdata.json";
import ImageSlider from "../components/ImageSlider";
export default function Home() {
  const [category, setCategory] = useState("mainData");
  const [Amount, setAmount] = useState(false);
  const mainData = useSelector((state) => state.mainData);
  const Women = mainData.filter((item) => item.gender === "women");
  const Men = mainData.filter((item) => item.gender === "men");
  const Child = mainData.filter((item) => item.gender === "child");
  const selectedcategory =
    category === "child"
      ? Child
      : category === "women"
      ? Women
      : category === "men"
      ? Men
      : mainData;

  return (
    <Layout1 title="Home Page">
      <section className="">
        <div>
          <div className="">
            <div className=" filter brightness-50 bg-[url('/static/images/Wallpapers/peter-aroner-KRvPP5i7DWA-unsplash.jpg')] bg-center bg-cover w-[100%] h-[60vh]"></div>
            <div className="w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] absolute top-[30%] text-white left-0 right-0 mx-auto lg:flex">
              <div className="">
                <h1 className="text-5xl">
                  CHOOSE YOUR <sapn className="block">SHOES WITH US.</sapn>
                </h1>
                <span className="text-base hero-paragragh">
                  We will help you to choose the product that without the doubt
                  suits you best.
                </span>
                <span className="block">And we mean it</span>
                <button className="bg-black text-base text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Read More
                </button>
              </div>
              <div className="w-[300px] h-[200px] mx-auto hidden lg:block">
                <ImageSlider slides={Sliderdata} />
              </div>
            </div>
          </div>
          <div className="relative h-[323px]">
            <div
              style={{ clipPath: " polygon(0 0, 100% 0, 100% 18%, 0 84%)" }}
              className="absolute bg-black h-[323px] w-[100vw]"
            ></div>
            <div className="w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] text-white  mx-auto absolute top-[50px] right-0 left-0">
              <h3 className="text-[red]">SHOP BY CATEGORIES</h3>
              <h6>Pick a category you need</h6>
              <div className="flex gap-4 ">
                <div
                  onClick={() => setCategory("women")}
                  className="cursor-pointer bg-[url('/static/images/Wallpapers/mike-von-ZrP2ahtPsG8-unsplash.jpg')] bg-center bg-cover basis-1/3 h-[20vw]"
                >
                  <h3 className="text-[red]">WOMEN</h3>
                  <span>{Women.length} PRODUCTS</span>
                </div>
                <div
                  onClick={() => setCategory("men")}
                  className="cursor-pointer bg-[url('/static/images/Wallpapers/hunter-johnson-IwPehLEyFKM-unsplash.jpg')] bg-center bg-cover basis-1/3 h-[20vw]"
                >
                  <h3 className="text-[red]">MEN</h3>
                  <span>{Men.length} PRODUCTS</span>
                </div>
                <div
                  onClick={() => setCategory("child")}
                  className="cursor-pointer bg-[url('/static/images/Wallpapers/taylor-smith-VmgXOXLT3pc-unsplash.jpg')] bg-center bg-cover basis-1/3 h-[20vw]"
                >
                  <h3 className="text-[red]">KIDS</h3>
                  <span>{Child.length} PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] mx-auto lg:mt-20">
            <h1 className="self-start">OUR PRODUCTS</h1>
            <div className="grid grid-cols-[minmax(50px,150px)_minmax(50px,150px)] sm:grid-cols-[minmax(100px,250px)_minmax(100px,250px)_minmax(100px,250px)_minmax(100px,250px)] lg:grid-cols-4 gap-5 justify-center">
              {selectedcategory
                ?.slice(0, Amount ? undefined : 9)
                .map((item) => {
                  return item && <StoreItemBuilder item={item} key={item.id} />;
                })}
            </div>

            <button
              className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setAmount(!Amount)}
            >
              {Amount ? "Show Less" : "Show All"}
            </button>
          </div>
        </div>
      </section>
    </Layout1>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // const res = await axios.get(`${server}/db/datas.json`);
    store.dispatch(FetchedAllItems(ShoeDB));
  }
);
