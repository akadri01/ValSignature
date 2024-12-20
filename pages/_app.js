import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "./redux/lib/with-redux-store";
import { Provider } from "react-redux";
import { checkForPopup } from "./helpers/popup.js";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
  componentDidMount() {
    checkForPopup() ;
  }
}

export default withReduxStore(MyApp);
