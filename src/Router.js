import React, { Components } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from './App'
import Private from "./components/Private";
import Public from "./components/Public";
import Protected from './components/Protected'
import Auth from "./Auth";
const Router = props => (
  <Switch>
    <Route exact path="/public" component={Public} />
    <PrivateRoute path="/Private" component={Private} />
    <PrivateRoute path="/Protected" component={Protected} />

  </Switch>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default Router;
