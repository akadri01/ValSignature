import React, { Fragment } from "react";
import Head from "next/head";
import "../styles/Main.scss";
import Navigation from "../containers/navigation";
import Footer from "../components/footer/footer";
import Auth from "../components/user/auth/index.js";

export default () => (
  <Fragment>
    <Head>
      <title>Valorys Real Estate</title>
      <meta name="description" content="Valorys Signature web platform" />
    </Head>
    <Navigation />
    <Auth />
    <Footer />
  </Fragment>
);
