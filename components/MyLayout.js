import Head from "next/head";
import Header from "./Header";
import { useEffect } from 'react';

const Layout = (props) => {

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N1V5G7F3BN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N1V5G7F3BN');
</script>

  return (
    <div>
      <Head>
        {/* Link to Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B7NYJNRKZT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B7NYJNRKZT');
          `}
        </script>
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
