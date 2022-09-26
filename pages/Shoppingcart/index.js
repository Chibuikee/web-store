import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../slices/Cart";
import storeitems from "../../ShoesData";
import CartBuilder from "../../components/cartBuilder/cartBuilder";

function Shoppingcart() {
  const shoet = storeitems[3];
  const CartData = useSelector((state) => state.cart);
  // console.log(count);
  const dispatch = useDispatch();

  return (
    <section>
      <div>
        {CartData.map((data) => (
          <CartBuilder data={data} key={data.id} />
        ))}
        <button onClick={() => dispatch(addToCart(shoet))}>addToCart</button>
        <h1>this is the cart page </h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(addToCart(shoet))}
        >
          Decrement
        </button>
      </div>
    </section>
  );
}

export default Shoppingcart;
