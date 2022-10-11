import React from "react";
import Layout1 from "../components/Layout/Layout1";
import { links, officeContacts } from "../components/Footer/data";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { BiLocationPlus } from "react-icons/bi";
import Link from "next/link";
import GetinTouch from "../components/GetinTouch";
function ContactUs() {
  return (
    <Layout1>
      <section>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1.527),rgba(0,0,0,0.5)),url('/static/images/Wallpapers/peter-aroner-KRvPP5i7DWA-unsplash.jpg')",
          }}
          className="text-[white] text-[1.5rem] font-semibold bg-center bg-cover w-[100%] h-[220px]"
        >
          <h4 className="">Home/Contact Us</h4>
          <h1>CONTACT US</h1>
        </div>
        <div class="flex mt-6 items-center">
          <div>
            <div className="flex flex-col gap-12">
              {officeContacts.map((item, keys) => (
                <div key={keys}>
                  <h3>{item.title}</h3>
                  {item.items.map((contact, keys) => (
                    <div key={keys} className="flex">
                      <contact.icon />
                      <h3>{contact.info}</h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <ul className="mt-4 flex gap-2">
              {links.map((item, key) => (
                <li
                  key={key}
                  className="flex items-center justify-center rounded-full "
                >
                  <Link href={item.url}>
                    <a className="">
                      <svg
                        className="w-4 h-4 text-[#afb5bd] fill-current "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={item.box}
                      >
                        {item.title}
                      </svg>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div class="overflow-hidden bg-none relative w-full text-right">
            <iframe
              className="gmap_iframe h-[353px]"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=660&amp;height=353&amp;hl=en&amp;q=Obayan akoka&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://mcpenation.com/">https://mcpenation.com</a>
          </div>
        </div>
        <div className="lg:flex items-center">
          <div className="basis-1/2">
            <h2 className="text-[red] font-bold text-2xl">GET IN TOUCH</h2>
            <p>
              Feedback is the grease that keeps the wheels of business rolling.
              Without soliciting feedback from customers, management and
              employees, no one will know what the real pulse of the business
              is, and this is detrimental to its effectiveness. It`s easy to ask
              for feedback, but actually getting it takes careful thought and
              planning.
            </p>
          </div>
          <div className="basis-1/2">
            <GetinTouch />
          </div>
        </div>
      </section>
    </Layout1>
  );
}
export default ContactUs;
