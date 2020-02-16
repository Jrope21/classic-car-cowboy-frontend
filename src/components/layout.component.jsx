import React from "react";
import PropTypes from "prop-types";

import Navigation from "./navigation/navigation.component.jsx";
import Footer from './footer/footer.component.jsx';
import "../styles/global.styles.scss";

const Layout = ({ children, globalInfo, navigation, ...props }) => {

  return (
    <div className="app">
      <span className="page-background"></span>
      <Navigation navigation={navigation} globalInfo={globalInfo} />
      <div>
        <main>{children}</main>
      </div>
      <Footer globalInfo={globalInfo} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout