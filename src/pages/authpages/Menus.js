import React, { useState, useEffect } from "react";
// import { Plus, Cart, Miniplayer, Grid } from "akar-icons";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
const axios = require("axios");

export default function Menus() {
  const [products, setproducts] = useState([]);
  const [message, setmessage] = useState("");

  const removeFood = async (id) => {
    const items = products.filter((item) => item._id !== id);
    setproducts(items);
    const res = await fetch(
      `http://localhost:5050/api/food/single/delete?id=${id}`
    );
    const data = await res.json();
    setmessage(data.message);
    setTimeout(() => {
      setmessage("");
    }, 2000);
  };

  const items = products.map((item) => (
    <div key={item._id} className="flex justify-center items-center py-20">
      <div className="food-item lg:w-68 lg:h-68">
        <div className="p-1 bg-red-500 text-white">₦{item.price}</div>
        <div>
          <img src={`http://localhost:5050/uploads/${item.image}`} alt="" />
        </div>
        <div className="item-name">
          <p>{item.name}</p>
        </div>
        <div className="item-ribbon">
          <h1 className="item-ribbon-icon" onClick={() => removeFood(item._id)}>
            x
          </h1>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/food/all")
      .then(function (response) {
        // handle success
        if (response.length !== 0) {
          setproducts(response.data);
          // console.log(response.data);
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
      <div className="pt-40 pb-10">
        <p className="page-title text-center">OUR MENU</p>
        {message && <p className="text-center text-red-500">Food deleted</p>}
        <div className="foodlist food-list bg-white py-10">{items}</div>
      </div>
      <Footer />
    </>
  );
}
