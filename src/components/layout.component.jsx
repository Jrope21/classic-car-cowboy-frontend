/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navigation from "./navigation/navigation.component.jsx";
import Footer from './footer/footer.component.jsx';
import "../styles/global.styles.scss";

const Layout = ({ children, globalInfo, ...props }) => {

  return (
    <div className="app">
      <span className="page-background"></span>
      <Navigation globalInfo={globalInfo} />
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