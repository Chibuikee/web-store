import React from "react";
import Link from "next/link";

function CartTotal({ cartData }) {
  const Subtotals = cartData.CartData.reduce(
    (a, c) => a + c.retailPrice * c.qty,
    0
  );
  const FlatRate = 15;
  const destination = [];
  const TOTALS = FlatRate + Subtotals;
  return (
    <div>
      <div>
        <h3>CART TOTALS</h3>
        <div>
          <h6>Subtotals</h6>
          <h6>{Subtotals && Subtotals}</h6>
        </div>
      </div>
      <div>
        <h3>SHIPPING</h3>
        <div>
          <h6>
            Flat Rate<span>${FlatRate}</span>
          </h6>
          <h6>Whereto:{destination}</h6>
        </div>
      </div>
      <div>
        <h3> TOTALS</h3>
        {TOTALS}
      </div>
      <div>
        <Link href="Shoppingcart/CheckoutPage" passHref>
          <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Proceed to checkout
          </button>
        </Link>
        <Link href="/" passHref>
          <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartTotal;
