import React from "react";

function Discount() {
  return (
    <div className="mt-10 xs:w-[55%]">
      <h3>Discount</h3>

      <p className="text-[0.8rem] py-6 max-w-[300px] ">
        To apply your discount enter number of your coupon and press `Submit`
        button
      </p>
      <div className="xs:flex items-center gap-5">
        <input
          className="php basis-[60%] w-full mt-[2px] py-2 block border-solid border border-[red]"
          type="text"
          placeholder="Enter your coupon"
        />
        <button className="bg-black text-white basis-[40%] mt-4 xs:mt-[initial] py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Discount;
