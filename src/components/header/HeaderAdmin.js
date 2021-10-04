import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Plus, Grid, Cart, Home } from "akar-icons";
import user from "../../Api/User";
import { logoutUser } from "../../Store/LoginSlice";

export default function HeaderAdmin() {
  const dispatch = useDispatch();
  const logout = () => {
    user.userLogout().then((res) => {
      if (res.message) {
        dispatch(logoutUser());
      }
    });
  };
  return (
    <div className="fixed z-50 left-0 right-0 top-0 w-full md:w-10/12 m-auto p-6 gap-2 px-4 bg-gray-100">
      <div className="w-full flex gap-4 m-auto">
        <div className="logo w-4/12 flex gap-2 items-center mb-6">
          <div className="w-8 h-6 bg-red-400 rounded-lg"></div>
          <div className="flex flex-col relative top-0">
            <Link to="/">
              <h4 className="text-xl font-extrabold text-gray-400">MOLADE</h4>
            </Link>
            {/* <span className="relative bottom-2 text-red-600">Treats</span> */}
          </div>
        </div>

        <div className="w-8/12  flex justify-end">
          <h2 className="font-bold mr-10 mt-1 cursor-pointer" onClick={logout}>
            Logout
          </h2>
        </div>
      </div>
      <div className="bg-red-100 mt-2 py-2 border border-red-300 rounded-full flex justify-center">
        <ul className="inline-flex gap-10 mr-10 mt-2">
          <Link to="/">
            <li className="flex flex-col items-center">
              <Home size={18} />
              Home
            </li>
          </Link>
          <Link to="/addfood">
            <li className="flex flex-col items-center">
              <Plus size={18} />
              Add Food
            </li>
          </Link>
          <Link to="/orders">
            <li className="flex flex-col items-center">
              <Cart size={18} />
              Orders
            </li>
          </Link>
          <Link to="/menus">
            <li className="flex flex-col items-center">
              <Grid size={18} />
              food menu
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
