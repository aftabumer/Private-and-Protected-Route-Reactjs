import React from "react";
import { Link } from "react-router-dom";
import Auth from '../Auth'
class Header extends React.Component {

  login = () => {
      Auth.authenticate()
  };
  logout = () => {
      Auth.signout()
  };
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="Public">Public</Link>
        <br />
        <Link to="Private">Private</Link>
        <br />
        <Link to="Protected">Protected</Link>
        <br />
        <button onClick={this.login}>Login</button>
        <br />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Header;
