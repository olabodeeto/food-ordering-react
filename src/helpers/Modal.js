import React, { useState } from "react";
import { useHistory } from "react-router";
// import { Cross } from "akar-icons";
import axios from "axios";

export default function Modal({ cart, cost, show, setShow }) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const makeOrder = async (e) => {
    e.preventDefault();
    console.log({ name, phone, address, cart, cost });

    const data = {
      name,
      phone,
      address,
      cart,
      cost,
    };
    console.log(data);
    console.log(cart[0].foodname);
    const response = await axios.post(
      "http://localhost:5050/api/order/add",
      data
    );
    if (response.data.message._id) {
      setMessage("Order completed successfully!");
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } else {
      setMessage("Ordering failed!");
    }
    console.log();

    // setShow("hidden");
  };
  return (
    <div
      className={`${show}
       w-full md:w-10/12 h-screen bg-black bg-opacity-80 fixed`}
    >
      <div className="bg-gray-50 p-5 mt-20 w-11/12 md:w-6/12 rounded-lg m-auto">
        {/* <Cross size={24} /> */}
        {message && <p className="text-gray-500 text-center">{message}</p>}
        <form
          className="p-2 mt-10
         flex flex-col gap-4"
          onSubmit={makeOrder}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            className="bg-gray-200 w-full py-3 px-2 outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
            className="bg-gray-200 w-full py-3 px-2 outline-none"
          />
          <input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required
            className="bg-gray-200 w-full py-3 px-2 outline-none"
          />
          <button
            className="bg-red-400 w-full py-3 px-2 outline-none"
            type="submit"
            onSubmit={makeOrder}
          >
            Complete order
          </button>
        </form>
      </div>
    </div>
  );
}
