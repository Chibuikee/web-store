import React from "react";
import Image from "next/image";
import Link from "next/link";
function StoreItemBuilder(props) {
  const newShoe = props.item;
  return (
    <div className="bg-[#b1b6bb] grid justify-center border border-solid border-black">
      <div className="w-[150px] h-[150px] ">
        {newShoe.media.imageUrl && (
          <Image
            className="w-full"
            src={newShoe.media.imageUrl}
            width={100}
            height={100}
            layout="responsive"
            alt="Shoe"
          />
        )}
      </div>
      <h5>{newShoe.brand}</h5>
      <h5>{newShoe.name}</h5>
      <h5>{newShoe.retailPrice}</h5>
      <h5>{newShoe.gender}</h5>
      <Link href={"/Shoepreview/" + newShoe.id}>
        <button className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          view product
        </button>
      </Link>
    </div>
  );
}

export default StoreItemBuilder;
