import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
// import { server } from "../config";
import Layout1 from "../components/Layout/Layout1";
import ShoeDB from "../Resources/ShoeDB.json";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function Shop({ data }) {
  const [Shoes, setShoes] = useState(data);
  const { searchedItem } = useSelector((state) => state);
  // const router = useRouter();
  useEffect(() => {
    function changeBrand() {
      selectByBrand();
    }
    searchedItem && changeBrand();
  }, [searchedItem?.brand]);
  // console.log(router?.state?.data);
  async function selectByBrand() {
    const q = query(
      collection(db, "shoeDb"),
      where("brand", "==", searchedItem?.brand ? searchedItem.brand : "Nike")
    );
    const filteredShoes = await getDocs(q);
    const shoeData = filteredShoes.docs.map((doc) => ({
      ...doc.data(),
    }));
    // console.log(shoeData);
    setShoes(shoeData);
  }
  // console.log(Shoes);
  return (
    <Layout1>
      <section>
        <div className=" w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] mx-auto lg:mt-20">
          <div className="grid s:grid-cols-4 grid-cols-2 gap-4">
            {Shoes?.map((item) => {
              return item.media.imageUrl && <StoreItemBuilder item={item} />;
            })}
            {Shoes.length == 0 && (
              <h1 className="text-[red]">
                check your internet connection Refresh your page
              </h1>
            )}
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default Shop;
export async function getStaticProps(context) {
  // const res = await axios.get(`${server}/db/datas.json`);
  return {
    props: { data: ShoeDB },
  };
}
