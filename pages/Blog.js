import React, { useState, useEffect } from "react";
import AllComents from "../components/Comments/AllComents";
import Layout1 from "../components/Layout/Layout1";
// import fs from "fs";
// import path from "path";
function Blog() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Layout1>
      {" "}
      <section>
        <div>
          <AllComents />
        </div>
        <div>
          <h1>WRITE A COMMENT</h1>
          <form>
            <input
              className="mt-[2px] block border-solid border border-[red]"
              type="email"
              name="email"
              placeholder="Enter Your E-mail"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              className="mt-[2px] block border-solid border border-[red]"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="mt-[2px] block border-solid border border-[red]"
              type=""
              placeholder="Your Questions"
              name="comment"
              onChange={handleChange}
              value={formData.comment}
            />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </Layout1>
  );
}

export default Blog;

// export async function getStaticProps(context) {
//   console.log(process.cwd());
//   return {
//     props: {},
//   };
// }
