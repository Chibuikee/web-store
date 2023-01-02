import React, { useState } from "react";
import CheckOutTotaling from "../../components/CheckOutTotaling/CheckOutTotaling";
import { useSelector, useDispatch } from "react-redux";
import Layout1 from "../../components/Layout/Layout1";
import Link from "next/link";

function CheckoutPage() {
  const CartData = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shippingInfo);
  };
  // const destination = `${shippingInfo.country},${shippingInfo.city}`;
  return (
    <Layout1>
      <div>
        <div className="saturate-[0] bg-[url('/static/images/Wallpapers/thomas-serer-R_0rTS9ENnk-unsplash.jpg')_] bg-center bg-cover w-[100%] h-[120px]">
          <h6 className="text-white px-[28px] pt-8 text-sm">
            <Link href="/">
              <a>Home</a>
            </Link>
            /CheckoutPage
          </h6>
          <h1 className=" text-xl mmd:text-3xl font-semibold text-white px-[28px]">
            CHECKOUT
          </h1>
        </div>
        <div className="px-[28px] ">
          <h2 className="py-5">BILLING DETAILS</h2>
          <div className="relative">
            <form onSubmit={handleSubmit} className="m:flex justify-between">
              <div className="text-xs basis-[50%]">
                <div className="m:flex text-xs gap-2">
                  <label className="w-full">
                    Name*
                    <input
                      className="mt-[2px] block border-solid border border-[red] w-full py-1 mb-4 rounded"
                      placeholder=""
                      type="text"
                      id="fname"
                      name="fname"
                      value={shippingInfo.fname}
                      onChange={handleChange}
                    ></input>
                  </label>
                  <label className="w-full">
                    Surname*
                    <input
                      className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                      placeholder=""
                      type="text"
                      id="lname"
                      name="lname"
                      value={shippingInfo.lname}
                      onChange={handleChange}
                    ></input>
                  </label>
                </div>
                <div className="m:flex text-xs gap-2 ">
                  <label className="w-full">
                    Company Name
                    <input
                      className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                      placeholder=""
                      type="text"
                      name="Companyname"
                      value={shippingInfo.Companyname}
                      onChange={handleChange}
                    ></input>
                  </label>
                  <label className="w-full">
                    Country*
                    <input
                      className="mt-[2px] w-full block border-solid border border-[red] py-1 rounded mb-4"
                      placeholder=""
                      type="text"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleChange}
                    ></input>
                  </label>
                </div>
                <label className="">
                  City*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleChange}
                  />
                </label>
                <label className="">
                  Address*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleChange}
                  />
                </label>
                <label className="">
                  Phone number
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                    type="tel"
                    name="telNo"
                    value={shippingInfo.telNo}
                    onChange={handleChange}
                  />
                </label>
                <label className="">
                  E-mail*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                    type="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleChange}
                  />
                </label>
                <label className="">
                  Zip code / post code*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red] py-1 mb-4 rounded"
                    type="number"
                    name="zip"
                    value={shippingInfo.zip}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="basis-[40%]">
                <div className="bg-black text-white mt-10 m:mt-[initial] py-6 px-4">
                  <CheckOutTotaling
                    cartData={{
                      CartData,
                      destination: `${shippingInfo.country},${shippingInfo.city}`,
                    }}
                  />
                </div>
                <div>
                  <div className="paymentMethod flex flex-col bg-black text-white mt-10 py-6 px-4">
                    <label className="">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="DIRECT BANK TRANSFER"
                        onChange={handleChange}
                        className="mr-3"
                      />
                      DIRECT BANK TRANSFER
                      <span className=" hidden text-xs max-w-[250px] ml-6">
                        Make your payment directly into our bank account. Please
                        use your Order ID the payment reference. Your order will
                        not be shipped until the funds have cleared in our
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="CHECK PAYMENT"
                        onChange={handleChange}
                        className="mr-3"
                      />
                      CHECK PAYMENT
                      <span className="hidden text-xs max-w-[250px] ml-6">
                        Temporarily not available. Please contact our accounting
                        unit before using. T&Cs apply
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="CASH ON DELIVERY"
                        onChange={handleChange}
                        className="mr-3"
                      />
                      CASH ON DELIVERY
                      <span className="hidden text-xs max-w-[250px] ml-6">
                        Must be physical cash and not transfer.
                      </span>
                    </label>
                  </div>
                  <button className="bg-black text-white w-full mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout1>
  );
}

export default CheckoutPage;
