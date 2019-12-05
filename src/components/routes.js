//Depencencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// import Page404 from "./components/Page404";
import Login from "./Login/Login";
import Keypad from "./Keypad/Keypad";
import Profile from "./Profile/Profile";
import { PrivateRoute, PublicRoute } from "./private-route/SpecialRoutes";

const AppRouters = () => (
  // <App>
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/Login" component={Login} /> */}
      <Route exact path="/Keypad" component={Keypad} />
      {/* <Route exact path="/Profile" component={Profile} /> */}
      <PrivateRoute path="/Profile" component={Profile} />
      {/* <PublicRoute path="/" component={Login} /> */}

      {/* <PublicRoute exact path="/Login" component={Login} /> */}
      
      {/* <PrivateRoute path="/Subject/:id" component={Subject} />
      <PublicRoute exact path="/Reset" component={PasswordReset} />
      <AdminRoute exact path="/Changes" component={Admin} /> */}
      
      {/* <Route component={Page404} /> */}
    </Switch>
  // </App>
);

export default AppRouters;
