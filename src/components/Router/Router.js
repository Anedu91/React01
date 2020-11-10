import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import ToolPage from "../ToolPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Redirect exact from="/tools" to="/" />
        <Route exact path="/tools/:id" component={ToolPage} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
