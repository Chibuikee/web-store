import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../slices/Cart";
import ShoePreviewBuilder from "../../components/ShoePreviewBuilder";
import { AddToWishList } from "../../slices/Wishlist";
import Layout1 from "../../components/Layout/Layout1";
function Shoedetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const productId = router.query.Shoedetails;
  const [Shoes, setShoes] = useState(null);
  const { mainData } = useSelector((state) => state);
  const fetchedShoeDetails = mainData.find((item) => item.id === productId);
  useEffect(() => {
    setShoes(fetchedShoeDetails);
  }, [fetchedShoeDetails]);

  return (
    <Layout1>
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
          <button
            className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(AddToWishList(Shoes))}
          >
            add to WishList
          </button>
        </div>
      </section>
    </Layout1>
  );
}

export default Shoedetails;
