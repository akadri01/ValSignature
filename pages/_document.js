import Document, { Head, Main, NextScript } from "next/document";

class Doc extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width initial-scale=1 shrink-to-fit=no"
          />
          <meta name="description" content="Valorys Real Estate Platform" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/icons/favicon-icon.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="/static/vendors/axios.js"
            async
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Doc;
