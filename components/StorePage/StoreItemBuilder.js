import React from "react";
import Image from "next/image";
import Link from "next/link";
function StoreItemBuilder(props) {
  const newShoe = props.item;
  return (
    <div className=" bg-[rgba(230,230,230,0.44)]">
      <div className="">
        {newShoe.media.imageUrl && (
          <Image
            // className="w-full"
            src={newShoe.media.imageUrl}
            width="100"
            height={100}
            layout="responsive"
            alt="Shoe"
          />
        )}
      </div>
      <div className="text-center pb-3 px-[12px]">
        <h5 className="truncate text-base">{newShoe.brand}</h5>
        <h5 className="truncate">{newShoe.name}</h5>
        <h5>{newShoe.retailPrice}</h5>
        <h5 className="mb-auto">{newShoe.gender}</h5>

        <Link href={"/Shoepreview/" + newShoe.id}>
          <button className="bg-black text-white text-[8px] md:text-[16px] md:py-2 md:px-4 py-1 px-2 rounded focus:outline-none focus:shadow-outline">
            view product
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StoreItemBuilder;
