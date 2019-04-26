import React, { Fragment } from "react";
import Head from "next/head";
import "./styles/Main.scss";
import { connect } from "react-redux";
import Navigation from "./containers/navigation";
import Banner from "./components/banner/banner";
import TownNavigation from "./components/town-nav/town-nav";
import Footer from "./components/footer/footer";
import BuySellRentTabs from "./components/trio-tabs/trio-tabs";
import RecentAds from "./components/recent-ads/recent-ads";
import YourEmptyComponent from './components/txt-carous/txt-carous';

const Index = () => (
  <Fragment>
    <Head>
      <title>Valorys Signature</title>
      <meta name="description" content="Immobilier de luxe dans le monde entier" />
    </Head>
    <Navigation />
    <Banner />
    <TownNavigation />
    <BuySellRentTabs />
    <YourEmptyComponent/>
    <RecentAds />
    <Footer />
  </Fragment>
);

export default connect()(Index);