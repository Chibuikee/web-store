import React, { useEffect, useState } from "react";
// import StoreItemBuilder from "../../components/StorePage/StoreItemBuilder";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../slices/Cart";
import ShoePreviewBuilder from "../../components/ShoePreviewBuilder";
function Shoedetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const productId = router.query.Shoedetails;
  const [Shoes, setShoes] = useState(null);
  const { mainData } = useSelector((state) => state);
  const fetchedShoeDetails = mainData.find((item) => item.id === productId);
  useEffect(() => {
    setShoes(fetchedShoeDetails);
  }, []);
  // useEffect(() => {
  //   setShoes()},[]
  // )
  return (
    <section>
      <div className="max-w-[1180px] mx-auto">
        <div className="w-full">
          {Shoes?.media.imageUrl && (
            <ShoePreviewBuilder item={{ Shoes, setShoes }} />
          )}
          <h1>Details of the shoes and the cost and description</h1>
        </div>
        <button
          className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(addToCart(Shoes))}
        >
          addToCart
        </button>
      </div>
      <Footer />
    </section>
  );
}

export default Shoedetails;
