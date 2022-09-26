import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, reduceQtyInCart } from "../../slices/Cart";
import CartBuilder from "../../components/cartBuilder/cartBuilder";
import Layout1 from "../../components/Layout/Layout1";

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
        <div>
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
          <div>
            {CartData.length === 0 && (
              <h1 className="text-3xl font-bold">
                YOUR SHOPPING CART IS EMPTY
              </h1>
            )}
          </div>
          <h1>this is the Cart page </h1>
        </div>
      </section>
    </Layout1>
  );
}

export default Shoppingcart;
