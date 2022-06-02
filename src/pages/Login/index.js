import React, { Component } from "react";
import { Card } from "antd";
import "./index.css"
import logo from "../../assets/logo192.png"

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container" style={{ width: 440 ,height:360}}>
        <img src={logo} className="logo" alt=""/>
          
        </Card>
      </div>
    );
  }
}

export default Login;
