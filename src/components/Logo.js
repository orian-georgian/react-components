import logo from "../logo.svg";
import { Component } from "react";

class Logo extends Component {
  constructor() {
    super();
  }

  render() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
}

export default Logo;
