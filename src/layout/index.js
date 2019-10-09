import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default ({ children }) => (
  <div className="gs-main">
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
);
