import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/Cart";
import CartBuilder from "../../components/cartBuilder/cartBuilder";

function Shoppingcart() {
  const CartData = useSelector((state) => state.cart);

  // console.log(count);
  const dispatch = useDispatch();
  const HandleDelete = (id) => {
    return dispatch(removeFromCart(id));
  };
  return (
    <section>
      <div>
        {CartData.map((data) => (
          <CartBuilder
            cartData={{
              Shoes: data,
              HandleDelete,
            }}
            key={data.id}
          />
        ))}
        <button onClick={() => dispatch(addToCart(shoet))}>addToCart</button>
        <h1>this is the cart page </h1>
      </div>
    </section>
  );
}

export default Shoppingcart;
