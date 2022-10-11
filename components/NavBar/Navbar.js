import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
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
    <nav className="">
      <div className="w-[60.72%] py-[2.94rem] bg-white flex flex-wrap justify-between mx-auto ">
        <div className=" basis-[10%]">
          <Link href="/">
            <a
              href="#"
              className="flex items-center self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              MUSKNET
            </a>
          </Link>
        </div>
        <div className="menu-main-ctn">
          <input type="checkbox" id="check" className="hidden" />
          <label
            for="check"
            className="navdrop-ctn"
            onClick={() => setNavBarToggle(!navBarToggle)}
          >
            {navBarToggle ? (
              <RiArrowDropUpLine className="navdrop-1" />
            ) : (
              <RiArrowDropDownLine className="navdrop-2" />
            )}
          </label>

          {
            <div className="menu-main">
              <ul className="menu-sub-1-ctn">
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

              <div className="menu-sub-2-ctn">
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
