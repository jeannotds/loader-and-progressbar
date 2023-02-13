import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../component/Loader";
import nProgress from "nprogress";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
    nProgress.start();
    console.log("Route in changing...");
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
    nProgress.done();
    console.log("Route in Ending...");
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}
