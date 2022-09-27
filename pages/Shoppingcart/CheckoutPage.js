import React, { useState } from "react";
import CheckOutTotaling from "../../components/CheckOutTotaling/CheckOutTotaling";
import { useSelector, useDispatch } from "react-redux";

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
    <div>
      <div>
        <h6>Home/CheckoutPage</h6>
        <h1 className="text-3xl font-semibold">CHECKOUT</h1>
      </div>
      <div>
        <h2>BILLING DETAILS</h2>
        <div className="relative">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex">
              <label>
                Name*
                <input
                  className="mt-[2px] block border-solid border border-[red]"
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
                  className="mt-[2px] block border-solid border border-[red]"
                  placeholder="Your name please"
                  type="text"
                  id="lname"
                  name="lname"
                  value={shippingInfo.lname}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
            <div className="flex">
              <label>
                Company Name
                <input
                  className="mt-[2px] block border-solid border border-[red]"
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
                  className="mt-[2px] block border-solid border border-[red]"
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
                className="mt-[2px] block border-solid border border-[red]"
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleChange}
              />
            </label>
            <label>
              Address*
              <input
                className="mt-[2px] block border-solid border border-[red]"
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone number
              <input
                className="mt-[2px] block border-solid border border-[red]"
                type="tel"
                name="telNo"
                value={shippingInfo.telNo}
                onChange={handleChange}
              />
            </label>
            <label>
              E-mail*
              <input
                className="mt-[2px] block border-solid border border-[red]"
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Zip code / post code*
              <input
                className="mt-[2px] block border-solid border border-[red]"
                type="number"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleChange}
              />
            </label>
            <div className="absolute right-10">
              <CheckOutTotaling
                cartData={{
                  CartData,
                  destination: `${shippingInfo.country},${shippingInfo.city}`,
                }}
              />
              <label>
                DIRECT BANK TRANSFER
                <input
                  type="radio"
                  name="paymentMethod"
                  value="DIRECT BANK TRANSFER"
                  onChange={handleChange}
                />
              </label>
              <label>
                CHECK PAYMENT
                <input
                  type="radio"
                  name="paymentMethod"
                  value="CHECK PAYMENT"
                  onChange={handleChange}
                />
              </label>
              <label>
                CASH ON DELIVERY
                <input
                  type="radio"
                  name="paymentMethod"
                  value="CASH ON DELIVERY"
                  onChange={handleChange}
                />
              </label>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
