import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </React.Fragment>
);
