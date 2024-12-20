import React, { Component } from "react";
import WithFacebook from "./_facebook";
import RegisterForm from "./_register";
import LoginForm from "./_login.js";
import Router from "next/router";
import { getUserDataFromLocalStorage } from "../../../helpers/localStorage.js";

export default class Auth extends Component {
  render() {
    return (
      <section className="auth mobile-desktop-frame">
        <h2>Login & Register</h2>
        <h3>With Facebook</h3>
        {<WithFacebook />}
        <div className="auth__forms">
          <div className="auth__forms-login">
            <h3>Login with email</h3>
            <LoginForm />
          </div>
          <div className="auth__forms-register">
            <h3>Register with email</h3>
            <RegisterForm />
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    if (getUserDataFromLocalStorage()) {
      return Router.push("/user/console");
    }
  }
}
