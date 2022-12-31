import React, { useState } from "react";

function Subscribe() {
  const [e_Values, setE_Values] = useState();
  return (
    <div className="md:flex py-20 bg-black pc:max-w-[900px] xl:max-w-[1180px] mx-auto">
      <div className="text-[#ffffff] basis-1/2">
        <h5 className="text-[1.5rem] font-bold">OUR NEWSLETTER</h5>
        <h5 className="text-[#9c8a8a]">
          Subscribe to get more useful information about us and to get you
          <span className="text-[#D93434] ml-1">15% discount </span>off your
          next purchase
        </h5>
      </div>
      <div className="sm:flex items-center gap-4 basis-2/3 ">
        <input
          value={e_Values}
          onChange={(e) => setE_Values(e.target.value)}
          placeholder="Enter your e-mail"
          className="rounded text-[12px] my-5 sm:my-[initial] bg-[#554] text-[#fffcfc] py-2 px-4 w-full sm:w-[70%] placeholder-[#D93434] placeholder-opacity-50"
        />
        <button className="w-full sm:w-[fit-content] sm:h-[fit-content]  text-[#ffffff] py-2 px-10 bg-[#D93434] rounded focus:outline-none focus:shadow-outline">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
