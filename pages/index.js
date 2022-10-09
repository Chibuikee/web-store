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
          <div className="relative">
            <div className=" filter brightness-50 bg-[url('/static/images/Wallpapers/peter-aroner-KRvPP5i7DWA-unsplash.jpg')] bg-center bg-cover w-[100%] h-[60vh]"></div>
            <div className="absolute top-0 text-white left-auto right-auto">
              <h1>CHOOSE YOUR SHOES WITH US.</h1>
              <span>
                We will help you to choose the product that without the doubt
                suits you best.
              </span>
              <span>And we mean it</span>
              <div className="w-[300px] h-[200px] mx-auto">
                <ImageSlider slides={Sliderdata} />
              </div>
              <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Read More
              </button>
            </div>
          </div>
          <h3>SHOP BY CATEGORIES</h3>
          <h6>Pick a category you need</h6>
          <div className="flex justify-between">
            <div
              onClick={() => setCategory("women")}
              className="bg-[url('/static/images/Wallpapers/mike-von-ZrP2ahtPsG8-unsplash.jpg')] bg-center bg-cover w-[20vw] h-[77px]"
            >
              <h3>WOMEN</h3>
              <span>{Women.length} PRODUCTS</span>
            </div>
            <div
              onClick={() => setCategory("men")}
              className="bg-[url('/static/images/Wallpapers/hunter-johnson-IwPehLEyFKM-unsplash.jpg')] bg-center bg-cover w-[20vw] h-[77px]"
            >
              <h3>MEN</h3>
              <span>{Men.length} PRODUCTS</span>
            </div>
            <div
              onClick={() => setCategory("child")}
              className="bg-[url('/static/images/Wallpapers/taylor-smith-VmgXOXLT3pc-unsplash.jpg')] bg-center bg-cover w-[20vw] h-[77px]"
            >
              <h3>KIDS</h3>
              <span>{Child.length} PRODUCTS</span>
            </div>
          </div>
        </div>
        <h1>OUR PRODUCTS</h1>
        <div className="grid grid-cols-4">
          {selectedcategory?.slice(0, Amount ? undefined : 9).map((item) => {
            return item && <StoreItemBuilder item={item} key={item.id} />;
          })}
          <h1>check your internet connection Refresh your page</h1>
          <button
            className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setAmount(!Amount)}
          >
            {Amount ? "Show Less" : "Show All"}
          </button>
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
