import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicNav from "./navigations/PublicNav";
import AuthNav from "./navigations/AuthNav";
import { useSelector, useDispatch } from "react-redux";
import user from "./Api/User";
import { loginUser, logoutUser } from "./Store/LoginSlice";

export default function Myapp() {
  const login = useSelector((state) => state.isLogin.login);
  const [isLoggedIn, setisLoggedIn] = useState(login);
  const dispatch = useDispatch();

  useEffect(() => {
    user.checkLogin().then((res) => {
      if (res.message !== false) {
        dispatch(loginUser());
        setisLoggedIn(login);
      } else {
        dispatch(logoutUser());
        setisLoggedIn(login);
      }
    });
  }, [login, dispatch]);
  return (
    <>
      <Router>{isLoggedIn ? <AuthNav /> : <PublicNav />}</Router>
    </>
  );
}
