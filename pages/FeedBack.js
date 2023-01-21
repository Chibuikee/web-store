import React from "react";
import FAQList from "../components/FeedBack/FAQList";
import GetinTouch from "../components/GetinTouch";
import Layout1 from "../components/Layout/Layout1";

function FeedBack() {
  return (
    <Layout1>
      <section className="">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1.527),rgba(0,0,0,0.5)),url('/static/images/Wallpapers/thomas-serer-R_0rTS9ENnk-unsplash.jpg')",
          }}
          className="text-[white] text-[1.5rem] bg-center bg-cover w-[100%] h-[220px]"
        >
          <h4 className="px-[28px] pt-8 text-sm">Home/FAQ</h4>
          <h1 className="text-xl mmd:text-3xl font-semibold px-[28px] mt-5">
            F.A.Q
          </h1>
        </div>
        <div className="mt-12 px-[10px] s:px-[initial] w-[90%] sm:w-[540px] md:w-[720px]  bg-white  flex-col items-center mx-auto">
          <div>
            <form className="flex items-center gap-2">
              <input
                className="mt-[2px] php basis-[60%] w-full py-1 block border-solid border border-[red]"
                type="search"
                placeholder="What`s your question?"
              />
              <button className="bg-black text-white basis-[40%] py-1 px-4 w-full rounded focus:outline-none focus:shadow-outline">
                Search
              </button>
            </form>
          </div>
          <hr className="mt-16" />
          <div className="mx-auto xs:w-[80%]">
            <FAQList />
          </div>
          <div>
            <h1 className="font-bold">HAVE ANY QUESTIONS?</h1>
            <GetinTouch />
          </div>
          <div className="hidden">
            <div>
              <h2 className="font-semibold">OUR NEWSSELLER</h2>
              <p className="text-sm">
                Subcribe to get more useful information about us and to get you
                <span className="text-[red]">15% discount </span>off your next
                purchase
              </p>
            </div>
            <div>
              <form className="xs:flex items-center gap-5">
                <input
                  className="php basis-[60%] w-full mt-[2px] block border-solid border border-[red]"
                  type="email"
                  placeholder="Enter your e-mail"
                />
                <button className="bg-black text-white basis-[40%] mt-4 xs:mt-[initial] py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
                  Subcribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default FeedBack;
