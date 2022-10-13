import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine, RiCloseFill } from "react-icons/ri";
import { NavMenuList, NavMenuUtilityList } from "./NavData";
function Navbar() {
  const [navBarToggle, setNavBarToggle] = useState(true);

  useEffect(() => {
    const w = () => {
      window.innerWidth === 800 && setNavBarToggle(true);
    };
    window.addEventListener("resize", w);
    return () => {
      window.removeEventListener("resize", w);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[999] w-full bg-white py-[2.94rem]">
      <div className="w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] flex flex-wrap justify-between mx-auto ">
        <div className="">
          <Link href="/">
            <a
              href="#"
              className="flex items-center self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              MUSKNET
            </a>
          </Link>
        </div>
        <div className="menu-main-ctn lg:basis-[70%] relative">
          <input type="checkbox" id="check" className="hidden" />
          <label
            for="check"
            className="navdrop-ctn"
            onClick={() => setNavBarToggle(!navBarToggle)}
          >
            {navBarToggle ? (
              <FaBars className="navdrop-2" />
            ) : (
              <RiCloseFill className="navdrop-2" />
            )}
          </label>

          {
            <div className="menu-main ">
              <ul className="menu-sub-1-ctn basis-[70%]">
                {NavMenuList.map(({ title, childList }, index) => (
                  <li key={index} className="menu-item-ctn">
                    <Link href={title.url}>
                      <a className="menu-item-heading ">
                        {title.name}
                        {childList.length !== 0 && (
                          <RiArrowDropDownLine className="DropDown" />
                        )}
                      </a>
                    </Link>

                    <ul className="menu-item-children-ctn">
                      {childList.map(({ url, name }, index) => (
                        <li className="menu-item-child" key={index}>
                          <Link href={url}>
                            <a>{name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className="menu-sub-2-ctn basis-[18%]">
                {NavMenuUtilityList.map((item, index) => (
                  <Link key={index} href={item.url}>
                    <a>
                      <item.icon size={18} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
