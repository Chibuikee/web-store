import React, { useState } from "react";
import CheckOutTotaling from "../../components/CheckOutTotaling/CheckOutTotaling";
import { useSelector, useDispatch } from "react-redux";
import Layout1 from "../../components/Layout/Layout1";

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
        <div className="bg-[url('/static/images/Wallpapers/thomas-serer-R_0rTS9ENnk-unsplash.jpg')] bg-center bg-cover w-[100%] h-[120px]">
          <h6>Home/CheckoutPage</h6>
          <h1 className="text-3xl font-semibold">CHECKOUT</h1>
        </div>
        <div className="px-[28px]">
          <h2>BILLING DETAILS</h2>
          <div className="relative">
            <form onSubmit={handleSubmit} className="m:flex justify-between">
              <div>
                <div className="m:flex">
                  <label>
                    Name*
                    <input
                      className="mt-[2px] block border-solid border border-[red] w-full"
                      placeholder=""
                      type="text"
                      id="fname"
                      name="fname"
                      value={shippingInfo.fname}
                      onChange={handleChange}
                    ></input>
                  </label>
                  <label>
                    Surname*
                    <input
                      className="mt-[2px] w-full block border-solid border border-[red]"
                      placeholder="Your name please"
                      type="text"
                      id="lname"
                      name="lname"
                      value={shippingInfo.lname}
                      onChange={handleChange}
                    ></input>
                  </label>
                </div>
                <div className="m:flex">
                  <label>
                    Company Name
                    <input
                      className="mt-[2px] w-full block border-solid border border-[red]"
                      placeholder="Your name please"
                      type="text"
                      name="Companyname"
                      value={shippingInfo.Companyname}
                      onChange={handleChange}
                    ></input>
                  </label>
                  <label>
                    Country*
                    <input
                      className="mt-[2px] w-full block border-solid border border-[red]"
                      placeholder=""
                      type="text"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleChange}
                    ></input>
                  </label>
                </div>
                <label>
                  City*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red]"
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Address*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red]"
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone number
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red]"
                    type="tel"
                    name="telNo"
                    value={shippingInfo.telNo}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  E-mail*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red]"
                    type="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Zip code / post code*
                  <input
                    className="mt-[2px] w-full block border-solid border border-[red]"
                    type="number"
                    name="zip"
                    value={shippingInfo.zip}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="">
                <CheckOutTotaling
                  cartData={{
                    CartData,
                    destination: `${shippingInfo.country},${shippingInfo.city}`,
                  }}
                />
                <div className="paymentMethod flex flex-col">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="DIRECT BANK TRANSFER"
                      onChange={handleChange}
                      className="mr-3"
                    />
                    DIRECT BANK TRANSFER
                    <span className=" hidden text-xs w-[230px] ml-6">
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
                    <span className="hidden text-xs w-[270px] ml-6">
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
                    <span className="hidden text-xs w-[270px] ml-6">
                      Must be physical cash and not transfer.
                    </span>
                  </label>
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
