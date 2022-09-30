import React, { useState } from "react";
import FAQList from "../components/FeedBack/FAQList";
import Layout1 from "../components/Layout/Layout1";

function FeedBack() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Layout1>
      <div>
        <div>
          <div>
            <h4>Home/FAQ</h4>
            <h1>F.A.Q</h1>
          </div>
          <div>
            <form className="flex">
              <input
                className="mt-[2px] block border-solid border border-[red]"
                type="search"
                placeholder="What can we help you to find"
              />
              <button>Search</button>
            </form>
          </div>
        </div>

        <div>
          <FAQList />
        </div>
        <div>
          <h1>HAVE ANY QUESTIONS?</h1>
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
        <div>
          <div>
            <h2>OUR NEWSSELLER</h2>
            <p>
              Subcribe to get more useful information about us and to get you
              <span className="text-[red] text-sm">15% discount </span>off your
              next purchase
            </p>
          </div>
          <div>
            <form className="flex">
              <input
                className="mt-[2px] block border-solid border border-[red]"
                type="email"
                placeholder="Enter your e-mail"
              />
              <button>Subcribe</button>
            </form>
          </div>
        </div>
      </div>
    </Layout1>
  );
}

export default FeedBack;
