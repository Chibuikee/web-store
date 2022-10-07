import React, { useEffect, useState } from "react";
// import axios from "axios";
// import path from "path"
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
// import { server } from "../config";
import Layout1 from "../components/Layout/Layout1";
import ShoeDB from "../Resources/ShoeDB.json";

function Shop({ data }) {
  // const [Shoes, setShoes] = useState(null);

  // useEffect(() => {
  //   setShoes(data);
  // }, []);
  return (
    <Layout1>
      <section>
        <div>
          <div className="grid grid-cols-4 gap-4">
            {data?.map((item) => {
              return item.media.imageUrl && <StoreItemBuilder item={item} />;
            })}
            <h1>check your internet connection Refresh your page</h1>
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
