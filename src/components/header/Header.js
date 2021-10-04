import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import carticon from "../../assets/cart.png";

export default function Header() {
  const cart = useSelector((state) => state.products.cart);
  return (
    <div className="fixed z-50 left-0 right-0 top-0 w-full md:w-10/12 m-auto pt-6 gap-2 px-4 bg-gray-100">
      <div className="w-full flex gap-4 m-auto">
        <div className="logo w-4/12 flex gap-2 items-center">
          <div className="w-8 h-6 bg-red-400 rounded-lg"></div>
          <div className="flex flex-col relative top-0">
            <Link to="/">
              <h4 className="text-xl font-extrabold text-gray-400">MOLADE</h4>
            </Link>
            {/* <span className="relative bottom-2 text-red-600">Treats</span> */}
          </div>
        </div>

        <div className="w-8/12  flex justify-end">
          <Link to="/cart">
            <div className="relative mr-4 mt-4">
              <img src={carticon} alt="" className="w-8" />
              <div
                className="absolute w-8 h-8 bg-gray-600
            text-gray-50 flex justify-center 
            items-center rounded-full bottom-4 left-4"
              >
                {cart.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-red-100 mt-2 py-2 border border-red-300 rounded-full flex justify-center">
        <ul className="inline-flex gap-4 mr-10 mt-2">
          {/* <li>Our menu</li>
          <li>Services</li> */}
        </ul>
      </div>
    </div>
  );
}
