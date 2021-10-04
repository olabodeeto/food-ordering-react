import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/publicpages/homepage/Homepage";
import Cart from "../pages/publicpages/Cart";
import Login from "../pages/publicpages/Login";
export default function PublicNav() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/admin" component={Login} />
    </Switch>
  );
}
