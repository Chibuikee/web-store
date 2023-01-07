import React from "react";
import Link from "next/link";
import { links, FooterLinks, footerContact } from "./data";
import Subscribe from "../subscribe";
function Footer() {
  return (
    <section className="bg-black mt-20 px-[28px]">
      <Subscribe />
      <div className="pc:max-w-[900px] xl:max-w-[1180px] mx-auto text-[#FFFFFF]">
        <div className="md:flex  justify-between mb-10">
          <div className="basis-[1/4] text-center xxs:text-left">
            <h3 className="text-[#D93434] py-5 font-bold">Musknet</h3>
            {/* <p className="xxs:max-w-[20ch]">
              Looks like you lost your connection. Please check it and try
              again.
            </p> */}
            <ul className=" basis-2/4 mt-1 flex space-x-4 mx-auto xxs:mx-[initial] w-[fit-content] ">
              {links.map((item, key) => (
                <li
                  key={key}
                  className="gap-4 flex items-center justify-center border-solid border-2 w-6 h-6 rounded-full border-red-500"
                >
                  <Link href={item.url}>
                    <a className="">
                      <svg
                        className="w-3 h-3 text-[#afb5bd] fill-current "
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
          <div className="footer-grif-ctn mmmd:flex xxs:grid grid-cols-[1fr_1fr] justify-between basis-3/4 md:basis-2/4 mmmd:basis-3/4">
            {FooterLinks}
            {footerContact}
          </div>
        </div>
        <div className="bg-[#D93434]  h-[1px] mx-auto"></div>
        <div className="text-center xs:text-left xs:flex justify-between items-center font-sans py-4 text-white mx-auto md:max-w-[100%] lg:max-w-[1280px] ">
          <p className="copy-rights text-muted">COPYRIGHT 2022 © Musknet</p>
          <a href="https://www.instagram.com/theme_rage_enavato/">
            DESIGN RIGHTS- theme_rage_enavato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
