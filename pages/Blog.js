import React, { useEffect, useState } from "react";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
import ShoesData from "../ShoesData";
import Layout1 from "../components/Layout/Layout1";

function Blog({ data }) {
  const [Shoes, setShoes] = useState(null);

  useEffect(() => {
    setShoes(data);
  }, []);
  return (
    <Layout1>
      <section>
        <div>
          <div className="grid grid-cols-4 gap-4">
            {Shoes?.map((item) => {
              return item.media.imageUrl && <StoreItemBuilder item={item} />;
            })}
            <h1>check your internet connection Refresh your page</h1>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default Blog;
export async function getStaticProps(context) {
  return {
    props: { data: ShoesData },
  };
}
