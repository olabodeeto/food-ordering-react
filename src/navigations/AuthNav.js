import React from "react";
import { Switch, Route } from "react-router";
import Cpanel from "../pages/authpages/Cpanel";
import Addproduct from "../pages/authpages/Addproduct";
import Orders from "../pages/authpages/Orders";
import Menus from "../pages/authpages/Menus";
import Messages from "../pages/authpages/Messages";
import Order from "../pages/authpages/Order";
import Message from "../pages/authpages/Message";

export default function AuthNav() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Cpanel} />
        <Route exact path="/addfood" component={Addproduct} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/order/:id" component={Order} />
        <Route exact path="/menus" component={Menus} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/message/:id" component={Message} />
      </Switch>
    </>
  );
}
