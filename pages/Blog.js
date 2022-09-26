import React, { useEffect, useState } from "react";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
import Footer from "../components/Footer/Footer";
import ShoesData from "../ShoesData";

function Blog({ data }) {
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

export default Blog;
export async function getStaticProps(context) {
  return {
    props: { data: ShoesData },
  };
}
