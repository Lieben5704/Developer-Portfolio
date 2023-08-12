import Head from "next/head";
import Header from "./Header";

const Layout = (props) => (
  <div>
    <Head>
      {/* Link to Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
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

export default Layout;
