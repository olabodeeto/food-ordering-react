import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header/Header";
import "./Homepage.css";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import { addToCart } from "../../../Store/ProductSlice";
import Footer from "../../../components/Footer";
const axios = require("axios");

export default function Homepage() {
  const cart = useSelector((state) => state.products.cart);
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();

  const addProductToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  const items = products.map((item) => (
    <div key={item._id} className="flex justify-center items-center">
      <div className="food-item lg:w-68 lg:h-68">
        <div className="p-1 bg-red-500 text-white">₦{item.price}</div>
        <div>
          <img src={`http://localhost:5050/uploads/${item.image}`} alt="" />
        </div>
        <div className="item-name">
          <p>{item.name}</p>
        </div>
        <div className="item-ribbon">
          <h1
            className="item-ribbon-icon"
            onClick={() =>
              addProductToCart({
                id: item._id,
                foodname: item.name,
                price: item.price,
                image: item.image,
                qty: 1,
              })
            }
          >
            +
          </h1>
        </div>
      </div>
    </div>
  ));

  // console.log(items);

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

  console.log(cart);
  return (
    <>
      <Header />
      <div className="pt-20 bg-white">
        <Banner />
        <div className="mt-10 pb-10">
          <p className="page-title text-center">OUR MENU</p>
          <div className="foodlist food-list">
            {items.length < 1 ? (
              <p
                className="text-center text-xl text-gray-400 
              p-4 w-11/12 m-auto"
              >
                Menu is currently empty
              </p>
            ) : (
              items
            )}
          </div>
        </div>
      </div>

      <Services />
      <Footer />
    </>
  );
}
