import React from "react";
import PropTypes from "prop-types";

import Navigation from "./navigation/navigation.component.jsx";
import Footer from './footer/footer.component.jsx';
import "../styles/global.styles.scss";

const Layout = ({ children, pageContext: {navigation, global}}) => (
    <div className="app">
      <span className="page-background"></span>
      <Navigation navigation={navigation} global={global} />
      <div>
        <main>{children}</main>
      </div>
      <Footer global={global} />
    </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout