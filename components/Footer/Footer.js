import React from "react";
import Link from "next/link";
import { links, FooterLinks, footerContact } from "./data";
function Footer() {
  return (
    <section className="bg-black mt-20">
      <div className="max-w-[1180px] mx-auto text-[#FFFFFF]">
        <div className="md:flex ">
          <div className="basis-[1/4]">
            <h3>Musknet</h3>
            <p>
              Looks like you lost your connection. Please check it and try
              again.
            </p>
            <ul className=" basis-2/4 mt-4 flex space-x-4 ">
              {links.map((item, key) => (
                <li
                  key={key}
                  className="gap-4 flex items-center justify-center border-solid border-2 w-12 h-12 rounded-full border-red-500"
                >
                  <Link href={item.url}>
                    <a className="">
                      <svg
                        className="w-6 h-6 text-[#afb5bd] fill-current "
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
          <div className="md:flex justify-between basis-3/4">
            {FooterLinks}
            {footerContact}
          </div>
        </div>
        <div className="bg-[#D93434] max-w-[80%] h-[1px] mx-auto"></div>
        <div className="flex px-7 justify-between items-center font-sans py-4 text-white mx-auto md:max-w-[960px] lg:max-w-[1280px] ">
          <p className="copy-rights text-muted">COPYRIGHT 2022 © Musknet</p>
          <a href="https://www.instagram.com/theme_rage_enavato/">
            DESIGN RIGHTS- theme_rage_enavato
          </a>
        </div>
      </div>
    </section>
  );
}
// position: absolute;
// width: 168px;
// height: 28px;

// font-family: 'Roboto Serif';
// font-style: normal;
// font-weight: 500;
// font-size: 32px;
// line-height: 133.02%;
// /* or 43px */
// #D93434 text color like red wine
// text-align: center;

// color: #FFFFFF;
export default Footer;
