import Link from "next/link";
import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="">
      <div className="w-[60.72%] py-[2.94rem] bg-white md:flex flex-wrap justify-between items-center mx-auto ">
        <div className="self-center basis-[10%]">
          <Link href="/">
            <a
              href="#"
              className="flex items-center self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              MUSKNET
            </a>
          </Link>
        </div>
        <div className="text-center menu-bar basis-[40.48%]">
          <ul className="md:flex justify-between  ">
            <li className="relative basis-1/5">
              <Link href="/">
                <a>HOME</a>
              </Link>
              <RiArrowDropDownLine className="DropDown" />
              <div className="sub-menu-1 absolute top-6 z-[9999]">
                <ul className="">
                  <li>
                    <Link href="/ContactUs">
                      <a>ContactUs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Logout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative basis-1/5">
              <Link href="/Shop">
                <a>SHOP</a>
              </Link>
              <RiArrowDropDownLine className="DropDown" />
              <div className="sub-menu-1 absolute top-6 z-[9999]">
                <ul className="">
                  <li>
                    <Link href="Shoppingcart/CheckoutPage">
                      <a>CheckOut</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="FeedBack">
                      <a>FeedBack</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative basis-1/5">
              <Link href="/">
                <a>PRODUCT</a>
              </Link>
              <RiArrowDropDownLine className="DropDown" />
              <div className="sub-menu-2 absolute top-6 z-[9999]">
                <ul className="">
                  <li>
                    <Link href="/">
                      <a>Adidas</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Nike</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Jordan</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Reebok</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="basis-1/5">
              <Link href="Blog">
                <a>BLOG</a>
              </Link>
              <RiArrowDropDownLine className="DropDown" />
            </li>
            <li className="basis-1/5">
              <Link href="/">
                <a>PAGE</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between basis-[11.32%]">
          <Link href="/Blog">
            <a>
              <FiSearch size={18} />
            </a>
          </Link>
          <Link href="/WishList">
            <a>
              <FiHeart size={18} />
            </a>
          </Link>
          <Link href="/Shoppingcart">
            <a>
              <FiShoppingCart size={18} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
