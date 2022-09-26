import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/Cart";
import { RemoveFromWishList } from "../slices/Wishlist";
import Wishesbuilder from "../components/Wishesbuilder";
import Layout1 from "../components/Layout/Layout1";
function Wishlist() {
  const { wishList } = useSelector((state) => state);

  // console.log(count);
  const dispatch = useDispatch();
  const HandleAddToCart = (id) => {
    return dispatch(addToCart(id));
  };
  const HandleDelete = (id) => {
    return dispatch(RemoveFromWishList(id));
  };
  return (
    <Layout1>
      <section>
        <h1 className="text-4xl font-bold">WISHLIST</h1>/*Please modify every
        tailwind class to fit design,css written by me is just for testing
        purpose */
        <div>
          {wishList.map((data) => (
            <Wishesbuilder
              WishesData={{
                Wishes: data,
                HandleDelete,
                HandleAddToCart,
              }}
              key={data.id}
            />
          ))}

          <h1>this is the Wish list page </h1>
        </div>
      </section>
    </Layout1>
  );
}

export default Wishlist;
