import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
const axios = require("axios");

export default function Message() {
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const deleteMessage = async () => {
    const res = await fetch(
      `http://localhost:5050/api/messages/delete?id=${message._id}`
    );
    const data = await res.json();
    setstatus(data.message);
    setTimeout(() => {
      history.push("/messages");
    }, 2000);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/messages/${id}`)
      .then(function (response) {
        if (response.length !== 0) {
          setmessage(response.data.message);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <HeaderAdmin />
      <div className="mt-5 pt-20 bg-gray-50 h-screen overflow-y-scroll">
        <div className="mt-20">
          <h1 className="text-gray-500 text-4xl pl-5">Welcome, Admin</h1>
          <div className="rounded-lg p-4 mt-10">
            {status && <p className="text-center mb-10">{status}</p>}
            <h2 className="text-center text-2xl text-gray-400">Messages</h2>
            <div
              className="
            mt-10 w-full md:w-8/12 m-auto"
            >
              <div className=" bg-gray-200 flex flex-col">
                <div className="flex w-full py-3 px-2">
                  <p className="w-8/12">
                    Message from{" "}
                    <span className="text-red-500">{message.email}</span>
                  </p>
                  <p className="w-4/12 flex gap-5 justify-end">
                    <span className="cursor-pointer" onClick={deleteMessage}>
                      Delete
                    </span>
                  </p>
                </div>
                <div className="w-full bg-gray-200 py-8 px-3 border-t-2 border-red-200">
                  <p className="text-gray-500">{message.message}</p>
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
