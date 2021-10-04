import React, { useState, useEffect } from "react";
// import { Plus, Cart, Miniplayer, Grid } from "akar-icons";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
const axios = require("axios");

export default function Orders() {
  const [orders, setorders] = useState([]);
  console.log(orders);

  const items = orders.map((item) => (
    <div key={item._id} className="w-full py-4 px-2 bg-gray-100 flex mb-2">
      <div className="w-6/12 text-xl text-gray-500">
        New order from {item.name}
      </div>
      <div className="flex w-6/12 gap-10 justify-end">
        <span className="cursor-pointer">
          <Link to={`/order/${item._id}`}>View</Link>
        </span>
        <span className="cursor-pointer text-red-400">Close order</span>
      </div>
    </div>
  ));
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/order/all")
      .then(function (response) {
        if (response.length !== 0) {
          setorders(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <HeaderAdmin />
      <div className="mt-5 pt-20 bg-gray-50 h-screen">
        <div className="mt-20">
          <h1 className="text-gray-500 text-4xl pl-5">Welcome, Admin</h1>
          <div className="rounded-lg p-4 mt-10">
            <div
              className="border border-red-200 w-full
             md:w-11/12 md:p-2 m-auto rounded-lg"
            >
              {items}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
