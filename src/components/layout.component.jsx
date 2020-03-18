import React from "react";
import PropTypes from "prop-types";
import "../styles/global.styles.scss";

import Navigation from "./navigation/navigation.component.jsx";
import Footer from './footer/footer.component.jsx';

import { GlobalContext } from "../lib/context/_global.context.js";

const Layout = ({ children, pageContext: {navigation, global}}) => (
    <div className="app">
      <span className="page-background"></span>
      <GlobalContext.Provider value={global}>
        <Navigation navigation={navigation} />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </GlobalContext.Provider>
    </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout