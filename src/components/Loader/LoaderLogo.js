import React from "react";
import logo from "../../assets/images/logo.png"
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <img
        src={logo}
        alt="Logo"
        className="raw_logo"
      />
    );
  }
}

export default LogoLoader;
