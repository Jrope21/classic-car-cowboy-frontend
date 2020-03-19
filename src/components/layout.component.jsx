import React from "react";
import PropTypes from "prop-types";
import "../styles/global.styles.scss";

import Navigation from "./navigation/navigation.component.jsx";
import Footer from './footer/footer.component.jsx';

import { GlobalContext } from "../lib/context/_global.context.js";
import { AllCars } from "../lib/context/_all-cars.context";

const Layout = ({ children, pageContext: {navigation, global, cars}}) => (
    <div className="app">
      <span className="page-background"></span>
      <GlobalContext.Provider value={global}>
        <Navigation navigation={navigation} />
          <AllCars.Provider value={cars}>
            <main>{children}</main>
          </AllCars.Provider>
        <Footer />
      </GlobalContext.Provider>
    </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout