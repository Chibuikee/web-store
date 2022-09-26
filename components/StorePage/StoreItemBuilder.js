import React from "react";
import Image from "next/image";
function StoreItemBuilder(props) {
  const newShoe = props.item;
  return (
    <div className="bg-[#b1b6bb] grid justify-center border border-solid border-black">
      <div>
        <Image
          src={newShoe.media.imageUrl}
          width={100}
          height={100}
          alt="Shoe"
        />
      </div>
      <h5>{newShoe.brand}</h5>
      <h5>{newShoe.name}</h5>
      <h5>{newShoe.retailPrice}</h5>
      <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        view product
      </button>
    </div>
  );
}

export default StoreItemBuilder;
