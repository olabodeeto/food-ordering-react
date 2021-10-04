import React, { useState, useEffect } from "react";
import { Plus, Cart, Miniplayer, Grid } from "akar-icons";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
const axios = require("axios");

export default function Cpanel() {
  const [totalOrder, settotalOrder] = useState("");
  const [totalMessage, settotalMessage] = useState("");
  const [totalMenu, settotalMenu] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/order/all")
      .then(function (response) {
        if (response.length !== 0) {
          settotalOrder(response.data.length);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get("http://localhost:5050/api/food/all")
      .then(function (response) {
        if (response.length !== 0) {
          settotalMenu(response.data.length);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get("http://localhost:5050/api/messages")
      .then(function (response) {
        if (response.length !== 0) {
          settotalMessage(response.data.length);
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
              className="w-full md:w-8/12
             m-auto flex flex-col gap-5"
            >
              <div className="flex gap-4">
                <div
                  className="w-6/12 h-48 bg-red-100 flex flex-col 
                justify-center items-center cursor-pointer"
                >
                  <Link to="/addfood">
                    <Plus size={60} />
                    <h2>Add Food</h2>
                  </Link>
                </div>

                <div
                  className="w-6/12 h-48 bg-red-100 flex flex-col 
                justify-center items-center"
                >
                  <Link to="/orders">
                    <Cart size={60} />
                    <h2>Orders</h2>
                    <p className="text-center">{totalOrder}</p>
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="w-6/12 h-48 bg-red-100 flex flex-col 
                justify-center items-center"
                >
                  <Link to="/menus">
                    <Grid size={60} />
                    <h2>Food Menu</h2>
                    <p className="text-center">{totalMenu}</p>
                  </Link>
                </div>
                <div
                  className="w-6/12 h-48 bg-red-100 flex flex-col 
                justify-center items-center"
                >
                  <Link to="/messages">
                    <Miniplayer size={60} />
                    <h2>Messages</h2>
                    <p className="text-center">{totalMessage}</p>
                  </Link>
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
