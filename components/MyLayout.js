import Head from "next/head";
import Header from "./Header";

useEffect(() => {
    // Google Analytics script
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VDXE8N8ND1');
  }, []);

const Layout = (props) => {
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
