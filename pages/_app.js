import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../component/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
    console.log("Route in changing...");
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
    console.log("Route in Ending...");
  });
  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}
