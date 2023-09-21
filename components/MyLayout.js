import Head from "next/head";
import Header from "./Header";
import { useEffect } from 'react';

const Layout = (props) => {

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-B7NYJNRKZT'); // Replace with your tracking ID
    }
  }, []);

  return (
    <div>
      <Head>
        {/* Link to Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous" {/* Use "crossOrigin" instead of "crossorigin" */}
        />
      </Head>
      <div>
        {/* Header component */}
        <Header />
        {/* Render the child components */}
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
