import Image from "next/image";
import React from "react";

function CommentBuilder({ data }) {
  return (
    <div className="flex">
      <Image src={data.imageUrl} height={50} width={50} className="" />
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default CommentBuilder;
