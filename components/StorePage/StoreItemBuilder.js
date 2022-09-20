import React from "react";
import Image from "next/image";
function StoreItemBuilder(props) {
  const newShoe = props.item;
  return (
    <div key={newShoe.id}>
      <div>
        <Image src={newShoe.media.imageUrl} width={50} height={50} alt="Shoe" />
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
