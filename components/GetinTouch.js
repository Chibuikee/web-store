import React, { useState } from "react";

function GetinTouch() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form className="w-full mt-10 m:mt-[initial]">
      <input
        className="mt-[2px] block border-solid border border-[red] rounded w-full py-1 mb-2 php"
        type="email"
        name="email"
        placeholder="Enter Your E-mail"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        className="mt-[2px] block border-solid border border-[red] rounded py-1 mb-2 w-full php"
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="mt-[2px] block border-solid border border-[red] rounded pt-1 pb-12 mb-2 w-full php "
        type=""
        placeholder="Your Questions"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <button className="bg-black text-white py-2 px-8 mt-3 w-full s450:w-[initial] rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
}

export default GetinTouch;
