import React, { Fragment } from "react";
import Head from "next/head";
import "../styles/Main.scss";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import UserAdverts from "../containers/user-adverts.js";

export default () => (
  <Fragment>
    <Head>
      <title>Valorys Signature</title>
      <meta name="description" content="Valorys Signature web platform" />
    </Head>
    <Navigation />
    <UserAdverts />
    <Footer />
  </Fragment>
);
