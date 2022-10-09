import React from "react";
import FAQList from "../components/FeedBack/FAQList";
import GetinTouch from "../components/GetinTouch";
import Layout1 from "../components/Layout/Layout1";

function FeedBack() {
  return (
    <Layout1>
      <div className="w-[60.72%] py-[2.94rem] bg-white md:flex flex-col items-center mx-auto ">
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
          <GetinTouch />
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
