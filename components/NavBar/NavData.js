import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
export const NavMenuList = [
  {
    title: { name: "HOME", url: "/" },
    childList: [
      { name: "Contactus", url: "/ContactUs" },
      { name: "Login", url: "/Login" },
      { name: "Settings", url: "/Settings" },
      { name: "Logout", url: "/Logout" },
    ],
  },
  {
    title: { name: "SHOP", url: "/Shop" },
    childList: [
      { name: "CheckOut", url: "/Shoppingcart/CheckoutPage" },
      { name: "Feedback", url: "/FeedBack" },
    ],
  },
  {
    title: { name: "PRODUCT", url: "/Shop" },
    childList: [
      { name: "adidas", url: "/Adidas" },
      { name: "Nike", url: "/Nike" },
      { name: "Jordan", url: "/Jordan" },
      { name: "Reebok", url: "/Reebok" },
    ],
  },
  {
    title: { name: "BLOG", url: "/Blog" },
    childList: [],
  },
  {
    title: { name: "PAGE", url: "/Page" },
    childList: [],
  },
];

export const NavMenuUtilityList = [
  { icon: FiSearch, url: "/Blog" },
  { icon: FiHeart, url: "/WishList" },
  { icon: FiShoppingCart, url: "/Shoppingcart" },
];
