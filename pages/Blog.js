import React, { useEffect, useState } from "react";
import StoreItemBuilder from "../components/StorePage/StoreItemBuilder";
// import ShoeData from "../ShoeData.json";
import Footer from "../components/Footer/Footer";

function Blog({ data }) {
  const [Shoes, setShoes] = useState(null);
  console.log(data);
  useEffect(() => {
    setShoes(data);
  }, []);
  return (
    <section>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {Shoes?.shoes.map((item) => {
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
  const res = await fetch("http://localhost:3000/api/shoesapi");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data },
  };
}
