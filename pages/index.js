import Head from "next/head";
// import Footer from "../components/Footer/Footer";
// import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchedAllItems } from "../slices/StoreData";
import { wrapper } from "../store";
import ShoesData from "../ShoesData";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
import Link from "next/link";
export default function Home() {
  const mainData = useSelector((state) => state.mainData);

  return (
    <section className="">
      <Head>
        <title>WEB STORE</title>
        <meta name="description" content="Modern one-stop e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="Shoppingcart" passHref>
          <h1 className="">CART</h1>
        </Link>
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
      </main>
    </section>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(FetchedAllItems(ShoesData));
  }
);
