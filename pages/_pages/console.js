import React, { Fragment } from "react";
import Head from "next/head";
import "../styles/Main.scss";
import Navigation from "../containers/navigation";
import Footer from "../components/footer/footer";
import UserConsole from "../containers/user-console";

export default () => (
  <Fragment>
    <Head>
      <title>Valorys Real Estate</title>
      <meta name="description" content="Valorys Signature web platform" />
    </Head>
    <Navigation consolePage={true} />
    <UserConsole />
    <Footer />
  </Fragment>
);
