import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import { adjustNavForLocalUser } from "../../redux/actions";
import { removeUserDataFromLocalStorage } from "../../helpers/localStorage.js";
import {
  locationRegionSelectField,
  locationTownSelectField
} from "../shared/data.js";

class Navigation extends Component {
  render() { 
    return (
      <section className="navigation">
        <div className="mobile-desktop-frame">
          <div className="navigation__brand">
            <Link href="/">
              <a className="navigation__brand-logo">
                <img
                  src="/static/images/icons/logo-small.png"
                  alt="Valorys Signature logo"
                  title="Go to home page"
                  
                />
              </a>
            </Link>
            <div
              className="navigation__brand-burger"
              id="navBurger"
              onClick={e => {
                document
                  .getElementById("navMenu")
                  .classList.toggle("show-navigation-menu");
                document
                  .getElementById("navBurger")
                  .classList.toggle("animate-burger-icon");
              }}
            >
              <span className="top" />
              <span className="middle" />
              <span className="bottom" />
            </div>
          </div>
          <nav className="navigation__navbar" id="navMenu">

          {this.props.localUser ? (
              this.isProfilePage
            ) : (
              <Link href="/user/console">
                <a className="navigation__navbar-btn">
                <button>Espace VIP</button>
                </a>
              </Link>
            )}
          
            <Link href="/user/auth">
              <a className="navigation__navbar-btn">
                <button>Proposez une vente</button>
              </a>
            </Link>
          </nav>
        </div>
      </section>
    );
  }

  get isProfilePage() {
    return window.location.pathname === "/user/console" ? (
      <a onClick={this.logout} className="links">
        Logout
      </a>
    ) : (
      <Fragment>
        <Link href="/user/console">
          <a className="links">mon compte</a>
        </Link>
        <a onClick={this.logout} className="links">
          Déconnexion
        </a>
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.dispatch(adjustNavForLocalUser());
  }

  logout = () => {
    axios.get("/auth/user/logout");
    removeUserDataFromLocalStorage();
    window.location.pathname !== "/"
      ? Router.push("/")
      : window.location.reload(false);
  };
}

function mapStateToProps(state) {
  return {
    localUser: state.user.userData
  };
}

export default connect(mapStateToProps)(Navigation);
