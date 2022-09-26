import React from "react";
import Image from "next/image";
function cartBuilder({ data }) {
  const Shoes = data;
  console.log(Shoes);
  return (
    <>
      {Shoes && Shoes.media.imageUrl && (
        <div className="bg-[#b1b6bb] grid justify-center border border-solid border-black">
          <div>
            <Image
              src={Shoes.media.imageUrl}
              width={100}
              height={100}
              alt="Shoe"
            />
          </div>
          <h5>{Shoes.brand}</h5>
          <h5>{Shoes.name}</h5>
          <h5>{Shoes.retailPrice}</h5>
        </div>
      )}
    </>
  );
}

export default cartBuilder;
