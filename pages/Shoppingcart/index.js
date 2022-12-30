import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, reduceQtyInCart } from "../../slices/Cart";
import CartBuilder from "../../components/cartBuilder/cartBuilder";
import Layout1 from "../../components/Layout/Layout1";
import CartTotal from "../../components/CheckOutTotaling/CartTotal";
import Discount from "../../components/CheckOutTotaling/Discount";

function Shoppingcart() {
  const CartData = useSelector((state) => state.cart);

  // console.log(count);
  const dispatch = useDispatch();
  const HandleDelete = (id) => {
    return dispatch(removeFromCart(id));
  };
  const HandleReduce = (id) => {
    return dispatch(reduceQtyInCart(id));
  };
  const HandleIncrement = (id) => {
    return dispatch(addToCart(id));
  };
  return (
    <Layout1>
      <section>
        <div className="bg-[url('/static/images/Wallpapers/thomas-serer-R_0rTS9ENnk-unsplash.jpg')] bg-center bg-cover w-[100%] h-[120px]"></div>
        <div>
          <h3>PRODUCT</h3>
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              {CartData.map((data) => (
                <CartBuilder
                  cartData={{
                    Shoes: data,
                    HandleDelete,
                    HandleReduce,
                    HandleIncrement,
                  }}
                  key={data.id}
                />
              ))}
            </div>

            <div>
              {
                <CartTotal
                  cartData={{
                    CartData,
                  }}
                />
              }
            </div>
          </div>
          <div>
            <Discount />
          </div>
          {CartData.length === 0 && (
            <div>
              <h1 className="text-3xl font-extrabold text-center text-[red]">
                YOUR SHOPPING CART IS EMPTY
              </h1>
              <p className="text-center">
                To see which products are in cart, go to shop and click on `Add
                to cart` button.
                <span className="block">
                  For now there is no product added into the cart
                </span>
              </p>
              <Link className="" href="/" passHref>
                <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Back to shop
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout1>
  );
}

export default Shoppingcart;
