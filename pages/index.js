import axios from "axios";
import React from "react";
import { server } from "../config";
import { useSelector } from "react-redux";
import { FetchedAllItems } from "../slices/StoreData";
import { wrapper } from "../store";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
import Link from "next/link";
import Layout1 from "../components/Layout/Layout1";
export default function Home() {
  const mainData = useSelector((state) => state.mainData);

  return (
    <Layout1 title="Home Page">
      <section className="">
        <div>
          <Link href="Shoppingcart" passHref>
            <h1 className="">CART</h1>
          </Link>
          <Link href="Wishlist" passHref>
            <h1 className="">WishList</h1>
          </Link>
        </div>
        <h1>OUR PRODUCTS</h1>
        <div className="grid grid-cols-4 gap-4">
          {mainData?.map((item) => {
            return (
              item.media.imageUrl && (
                <StoreItemBuilder item={item} key={item.id} />
              )
            );
          })}
          <h1>check your internet connection Refresh your page</h1>
        </div>
      </section>
    </Layout1>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await axios.get("https://musknet.vercel.app/db/datas.json");
    store.dispatch(FetchedAllItems(res.data));
  }
);
