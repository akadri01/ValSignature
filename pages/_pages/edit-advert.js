import React, { Fragment, Component } from "react";
import Head from "next/head";
import _isEmpty from "lodash.isempty";
import "../styles/Main.scss";
import fetch from "../helpers/fetch";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import EditAdvertContainer from "../containers/edit-advert.js";

const EditAdvertPage = ({ property }) => (
  <Fragment>
    <Head>
      <title>Valorys Real Estate</title>
      <meta name="description" content="Valorys Signature web platform" />
    </Head>
    <Navigation />
    <EditAdvertContainer property={property} />
    <Footer />
  </Fragment>
);

EditAdvertPage.getInitialProps = async ({ query }) => {
  const property = await fetch(`/api/fetch/property/${query.id}`);
  return _isEmpty(property) ? { property: false } : { property };
};

export default EditAdvertPage;
