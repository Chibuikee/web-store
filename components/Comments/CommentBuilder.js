import Image from "next/image";
import React from "react";

function CommentBuilder({ data }) {
  return (
    <div className="flex">
      <Image
        src={
          data.imageUrl === ""
            ? "https://source.unsplash.com/random"
            : data.imageUrl
        }
        height={50}
        width={50}
        alt="commenter"
        className=""
      />
      <div>
        <h1>{data.name}</h1>
        <span>{data.createdAt.toDate().toDateString()}</span>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default CommentBuilder;
