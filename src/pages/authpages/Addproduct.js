import React, { useState } from "react";
// import { Plus, Cart, Miniplayer, Grid } from "akar-icons";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
import axios from "axios";

export default function Addproduct() {
  const [message, setmessage] = useState(null);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [imageupload, setimageupload] = useState(null);

  const addFood = async (e) => {
    e.preventDefault();
    const file = imageupload[0];
    const data = new FormData();
    data.append("file", file);

    const response = await axios.post(
      "http://localhost:5050/api/food/upload",
      data
    );

    if (response.data.image !== null) {
      const foodimage = response.data.image;
      const userData = { name, price, description, foodimage };
      const resp = await axios.post(
        "http://localhost:5050/api/food/add",
        userData
      );
      setmessage("Food added to menu successfully!");

      setTimeout(() => {
        setmessage(null);
      }, 2000);
      console.log(resp.data);
    }
    console.log(response.data.image);

    setname("");
    setprice("");
    setdescription("");
    setimageupload("");
  };
  return (
    <>
      <HeaderAdmin />
      <div className="mt-5 pt-20 bg-gray-50 h-screen">
        <div className="mt-20">
          <h1 className="text-gray-500 text-4xl pl-5">Add Food</h1>
          <div className="rounded-lg p-4 mt-10 m-auto w-10/12">
            <div
              className="bg-gray-100 w-full 
              md:w-8/12 m-auto p-4 rounded-lg
            "
            >
              {message ? (
                <h1>{message}</h1>
              ) : (
                <form onSubmit={addFood}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    required
                    onChange={(e) => setname(e.target.value)}
                    className="w-full mb-2 outline-none py-3
                   px-2 bg-gray-200 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    required
                    onChange={(e) => setprice(e.target.value)}
                    className="w-full mb-2 outline-none py-3
                   px-2 bg-gray-200 rounded-lg"
                    maxLength="4"
                  />
                  <textarea
                    placeholder="Description"
                    value={description}
                    required
                    onChange={(e) => setdescription(e.target.value)}
                    className="w-full mb-1 outline-none py-3
                   px-2 bg-gray-200 rounded-lg resize-none"
                  ></textarea>
                  <input
                    type="file"
                    placeholder="Image"
                    required
                    onChange={(e) => setimageupload(e.target.files)}
                    className="w-full mb-2 outline-none py-3
                   px-2 bg-gray-200 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full mb-1 outline-none py-3
                   px-2 bg-red-300 rounded-lg resize-none"
                    onSubmit={addFood}
                  >
                    Add
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
