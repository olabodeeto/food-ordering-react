import React, { useEffect, useState } from "react";
import { Plus, Minus, Cross } from "akar-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, decrement, increment } from "../../Store/ProductSlice";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Modal from "../../helpers/Modal";

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const [showModal, setshowModal] = useState("hidden");
  const dispatch = useDispatch();

  const setShow = () => {
    if (showModal === "Block") {
      setshowModal("hidden");
      console.log(showModal);
    } else {
      setshowModal("block");
      console.log(showModal);
    }
  };

  const toSum = cart.map((product) => product.price * product.qty);
  let sum = toSum.reduce(function (a, b) {
    return a + b;
  }, 0);
  sum = Math.round((sum + Number.EPSILON) * 100) / 100;
  const items = cart.map((item) => (
    <div
      key={item.id}
      className="border border-red-200 w-full rounded-lg md:w-8/12 m-auto
    p-4 flex gap-4 justify-center items-center mb-2"
    >
      <div className="w-6/12 flex flex-col">
        <div className="w-28 h-28">
          <img
            src={`http://localhost:5050/uploads/${item.image}`}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="max-w-sm text-xs md:text-sm mt-4">
          {item.foodname.substring(0, 14)}..
        </p>
      </div>
      <div className="w-6/12 flex justify-end">
        <div>
          <div className="flex gap-2 mb-4">
            <div
              className="p-2 bg-red-500"
              onClick={() => dispatch(updateCart(item))}
            >
              <Cross size={14} color="#fff" />
            </div>
            <div
              className="p-2 bg-green-500"
              onClick={() => dispatch(increment(item))}
            >
              <Plus size={14} />
            </div>
            <div
              className="p-2 bg-yellow-400"
              onClick={() => dispatch(decrement(item))}
            >
              <Minus size={14} />
            </div>
          </div>
          <p className="text-xl text-gray-600">₦{item.price}</p>
          <p>QTY: {item.qty}</p>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <Modal show={showModal} setShow={setshowModal} cart={cart} cost={sum} />
      <Header />
      <div className="mt-20 bg-gray-50 p-2 h-screen overflow-y-scroll">
        <div className="mt-20 p-5">
          <h1 className="text-gray-500 text-4xl">Your cart</h1>
          <div className=" mt-10">
            {" "}
            {cart.length > 0 ? items : "Your cart is empty"}
          </div>
          {cart.length > 0 ? (
            <div className="w-full md:w-8/12 m-auto bg-white">
              <div className="flex mt-5 py-2 px-1 bg-red-500 text-white">
                <p className="w-6/12"> Total cost:</p>
                <p className="w-6/12 flex justify-end">₦{sum}</p>
              </div>
              <div className="mt-5">
                <div className="mt-10 mb-5">
                  <p className="text-gray-600">
                    Note: Currently, we only support pay on delivery
                  </p>
                  <p></p>
                </div>
                <button
                  className="text-gray-50 bg-gray-800 
                py-2 px-8 rounded-lg"
                  onClick={setShow}
                >
                  Order
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
