import Link from "next/link";
import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="border-gray-200 dark:border-gray-700">
      <div className="w-[60.72%] py-[2.94rem] bg-white md:flex flex-wrap justify-between items-center mx-auto">
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
          <ul className="md:inline-flex justify-between  ">
            <li className="relative">
              <Link href="/">
                <a>HOME</a>
              </Link>
              <svg
                className="ml-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="sub-menu-1 absolute top-6">
                <ul className="">
                  <li>
                    <Link href="/">
                      <a>Profile</a>
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
            <li>
              <Link href="/Blog">
                <a>SHOP</a>
              </Link>
              <svg
                className="ml-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="sub-menu-1 absolute top-6">
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
            <li className="relative">
              <Link href="/">
                <a>PRODUCT</a>
              </Link>
              <svg
                className="ml-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="sub-menu-2 absolute top-6">
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
            <li>
              <Link href="Blog">
                <a>BLOG</a>
              </Link>
              <svg
                className="ml-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
            <li>
              <Link href="/">
                <a>PAGE</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between basis-[11.32%]">
          <Link href="Blog">
            <a>
              <FiSearch size={18} />
            </a>
          </Link>
          <Link href="Wishlist">
            <a>
              <FiHeart size={18} />
            </a>
          </Link>
          <Link href="Shoppingcart">
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
