import React, { useState } from "react";
import baker from "../../../../assets/baker.png";
import dish from "../../../../assets/dish.png";
import axios from "axios";

export default function Banner() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState("Send");

  const sendMessage = async (e) => {
    if (email.length > 0 && message.length > 0) {
      e.preventDefault();
      const data = { email, message };
      const response = await axios.post(
        "http://localhost:5050/api/message",
        data
      );
      if (response.data.mssg) {
        setstatus(response.data.mssg);
      } else {
        setstatus("Failed");
      }

      setemail("");
      setmessage("");
    } else {
      console.log("fill the form");
    }
  };
  return (
    <>
      <div
        className="w-full md:h-screen flex 
        justify-center banner"
      >
        <div className="mt-20 md:mt-20 lg:mt-40 w-10/12 m-auto">
          <div className="w-full text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">
              Molade Treats
            </h1>
            <p
              className="text-gray-50 text-sm md:text-xl bg-black rounded-xl 
            text-center w-8/12 md:w-4/12 m-auto mt-5 p-1"
            >
              And The Food They Serve Their Guests
            </p>
          </div>
          <div className="mt-14 md:mt-32 w-full m-auto mb-20">
            <form
              className="flex gap-2 flex-col md:flex-row 
            p-8 bg-red-500 rounded-lg"
            >
              <input
                type="text"
                placeholder="Email or Phone number"
                value={email}
                required
                className="py-3 px-2 w-full md:w-4/12 
                mb-2 rounded-lg outline-none"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Messsge"
                value={message}
                required
                className="py-3 px-2 w-full md:w-4/12 mb-2 
                rounded-lg outline-none"
                onChange={(e) => setmessage(e.target.value)}
              />
              <button
                className="py-3 px-2 w-full md:w-4/12 mb-2 bg-red-400 rounded-lg"
                onClick={sendMessage}
              >
                {status}
              </button>
            </form>

            <div
              className="mt-28 p-2 flex gap-8 md:gap-20
             flex-col md:flex-row justify-center"
            >
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={baker} alt="" />
                </div>
                <div className="flex flex-col gap-2 text-white">
                  <h1 className="text-4xl font-bold">137</h1>
                  <p>Customers Served</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={dish} alt="" />
                </div>
                <div className="flex flex-col gap-2 text-white">
                  <h1 className="text-4xl font-bold">257</h1>
                  <p>Dishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
