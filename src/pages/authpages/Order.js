import React, { useState, useEffect } from "react";
// import { Plus, Cart, Miniplayer, Grid } from "akar-icons";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
const axios = require("axios");

export default function Order() {
  const [orders, setorders] = useState("");
  const [message, setmessage] = useState(null);
  const [orderitems, setorderitems] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const closeOrder = async () => {
    const res = await fetch(
      `http://localhost:5050/api/order/close?id=${orders._id}`
    );
    const data = await res.json();
    setmessage(data.message);
    setTimeout(() => {
      history.push("/orders");
    }, 2000);
  };

  const items = orderitems.map((item) => (
    <div key={Date.now()} className="mb-10 text-sm">
      <div className="flex flex-col">
        <p>
          <img
            src={`http://localhost:5050/uploads/${item.image}`}
            alt=""
            className="mb-4 w-40 flex"
          />
        </p>
        <p>{item.foodname}</p>
        <p>Qty: {item.qty}</p>
        <p>Price: {item.price}</p>
      </div>
    </div>
  ));

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/order/${id}`)
      .then(function (response) {
        if (response.length !== 0) {
          setorders(response.data.order);
          setorderitems(response.data.cart);
          console.log(response.data.order);
          // console.log(response.data.cart);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <HeaderAdmin />
      <div className="mt-5 pt-20 bg-gray-50 h-screen overflow-y-scroll">
        <div className="mt-20">
          <h1 className="text-gray-500 text-4xl pl-5">Welcome, Admin</h1>
          <div className="rounded-lg p-4 mt-10">
            {message && <p className="text-center mb-10">Order closed</p>}
            <div
              className="border border-red-200 w-full
             md:w-11/12 md:p-2 m-auto rounded-lg"
            >
              <div className="w-full py-4 px-2 bg-gray-100  mb-2 flex">
                <div className="w-6/12 text-xl text-gray-500">
                  <div className="mt-10 flex gap-4">{items}</div>

                  <span>
                    New order from
                    <span className="text-red-500 mt-24"> {orders.name}</span>
                  </span>
                  <div className="mt-2">
                    <p className="mb-2">
                      Order No:
                      <span className="text-red-500"> {orders.orderNo}</span>
                    </p>

                    <p className="mb-2">
                      Delivery address:
                      <span className="text-red-500"> {orders.address}</span>
                    </p>

                    <p className="mb-2">
                      Phone number:
                      <span className="text-red-500"> {orders.phone}</span>
                    </p>
                    <div className="mt-10 overflow-y-scroll">
                      <h1>Ordered Food</h1>

                      <p className="p-3 bg-red-400 w-full mt-10 text-black">
                        Total cost: {orders.cost}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-6/12 gap-10 justify-end">
                  {/* <span className="cursor-pointer">View</span> */}
                  <span
                    className="cursor-pointer text-red-400"
                    onClick={closeOrder}
                  >
                    Close order
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
