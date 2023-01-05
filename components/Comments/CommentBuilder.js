import Image from "next/image";
import React from "react";

function CommentBuilder({ data }) {
  return (
    <div className="flex gap-5 my-3 py-5 px-5 bg-[#f8f7f7]">
      <div className="w-[50px] h-[50px]">
        <Image
          src={
            data.imageUrl === ""
              ? "https://source.unsplash.com/random"
              : data.imageUrl
          }
          height={50}
          width={50}
          alt="commenter"
          className="rounded-full w-[50px] h-[50px]"
        />
      </div>
      <div className="">
        <h1 className="font-semibold">{data.name}</h1>
        <span className="text-xs">
          {data.createdAt?.toDate().toDateString()}
        </span>
        <p className="text-sm">{data.description}</p>
      </div>
    </div>
  );
}

export default CommentBuilder;
