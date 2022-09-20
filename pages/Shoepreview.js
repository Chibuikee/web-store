import React, { useEffect, useState } from "react";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
import ShoeData from "../ShoeData.json";
import Footer from "../components/Footer/Footer";

function Shoepreview({ data }) {
  const [Shoes, setShoes] = useState(null);

  useEffect(() => {
    setShoes(data);
  }, []);
  return (
    <section>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {Shoes?.map((item) => {
            return item.media.imageUrl && <StoreItemBuilder item={item} />;
          })}
          <h1>check your internet connection Refresh your page</h1>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Shoepreview;
export async function getStaticProps(context) {
  const res = await ShoeData;

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: res },
  };
}
