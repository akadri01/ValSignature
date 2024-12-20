import React, { Fragment } from "react";
import Router from "next/router";
import Head from "next/head";
import "../styles/Main.scss";
import BuyCredit from "../components/user/buy-credit/buy-credit";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";

export default () => (
  <Fragment>
    <Head>
      <title>Valorys Real Estate</title>
      <meta name="description" content="Valorys Signature web platform" />
    </Head>
    <Navigation />
    <BuyCredit />
    <div className="go-to-previous-page mobile-desktop-frame">
      <button
        onClick={() => {
          Router.push("/user/adverts");
        }}
      >
        Les biens postés
      </button>
    </div>
    <Footer />
  </Fragment>
);
