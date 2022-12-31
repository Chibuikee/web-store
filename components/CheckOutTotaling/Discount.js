import React from "react";

function Discount() {
  return (
    <div>
      <h3>Discount</h3>
      <p className="text-[0.8rem]">
        To apply your discount enter number of your coupon and press `Submit`
        button
      </p>
      <input
        className="mt-[2px] block border-solid border border-[red]"
        type="text"
        placeholder="Enter your coupon"
      />
      <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </div>
  );
}

export default Discount;
