import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/LoginSlice";
import { Redirect } from "react-router";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redir, setredir] = useState(false);
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const userData = { email, password };
      const response = await fetch("http://localhost:5050/api/admin/login", {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.message === true) {
        dispatch(loginUser());
        setredir(true);
      }
      console.log(data);
      setemail("");
      setpassword("");
    } else {
      console.log("fill the form");
    }
  };

  if (redir) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <div className="mt-28 bg-gray-50 p-2 h-screen">
        <div className="mt-20 p-2 md:p-5">
          <h1 className="text-gray-500 text-4xl text-center">ADMIN LOGIN</h1>
          <div className="rounded-lg  mt-10">
            <div className="w-11/12 md:w-5/12 m-auto">
              <form className="py-6 px-4 rounded-lg border border-red-200 bg-red-200 ">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  required
                  className="w-full py-3 px-2 outline-none 
                  bg-white mb-2 rounded-lg"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  className="w-full py-3 px-2 outline-none 
                  bg-white mb-4 rounded-lg"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <button
                  className="w-full py-3 px-2 outline-none
                 bg-red-400 rounded-lg"
                  onClick={login}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
