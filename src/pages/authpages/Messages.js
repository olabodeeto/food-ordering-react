import React, { useState, useEffect } from "react";
// import { Plus, Cart, Miniplayer, Grid } from "akar-icons";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
const axios = require("axios");

export default function Messages() {
  const [messages, setmessages] = useState([]);
  console.log(messages);

  const items = messages.map((item) => (
    <div key={item._id} className=" bg-gray-200 flex flex-col mb-2">
      <div className="flex w-full py-3 px-2">
        <p className="w-8/12">
          New message from <span className="text-red-500">{item.email}</span>
        </p>
        <p className="w-4/12 flex gap-5 justify-end">
          <span className="cursor-pointer">
            <Link to={`/message/${item._id}`}>View</Link>
          </span>
        </p>
      </div>
    </div>
  ));

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/messages")
      .then(function (response) {
        if (response.length !== 0) {
          setmessages(response.data);
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
      <div className="mt-5 pt-20 bg-gray-50 h-screen overflow-y-scroll">
        <div className="mt-20">
          <h1 className="text-gray-500 text-4xl pl-5">Welcome, Admin</h1>
          <div className="rounded-lg p-4 mt-10">
            <h2 className="text-center text-2xl text-gray-400">Messages</h2>
            <div
              className="
            mt-10 w-full md:w-8/12 m-auto"
            >
              {items.length > 0 ? (
                items
              ) : (
                <p className="text-center text-gray-400">You dont message</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
