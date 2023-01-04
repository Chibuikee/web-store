import React from "react";
import { blogLinks } from "./blogData";

function BlogheaderBuilder() {
  return (
    <div className="grid grid-cols-2 xxs:grid-cols-3 m:grid-cols-5 justify-between">
      {blogLinks.map((item, key) => (
        <div key={key} className="">
          <h5 className="font-semibold">{item.title}</h5>
          <div>
            {item.linkItems.map((item, key) => (
              <h6 key={key}>{item}</h6>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogheaderBuilder;
