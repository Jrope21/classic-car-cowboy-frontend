/*******************************************************
********************************************************
**
**  REEAADDD MEEE ARGGGGGG
**
**  1. This file is responsible for generating the pages / routes from wordpress
**  2. I chose to use fetch instead of graphql => works better with a modular layout (flexible content)
**
********************************************************
********************************************************/


const fetch = require("node-fetch");
const path = require(`path`)
const BASE_URL = `https://createboldly.net`;
const URL_GET_ALL_PAGES = `${BASE_URL}/index.php/wp-json/wp/v2/pages?per_page=100`;
const URL_GET_ALL_CARS = `${BASE_URL}/index.php/wp-json/wp/v2/cars?per_page=100`;
const URL_GET_GLOBAL_INFO = `${BASE_URL}/wp-json/acf/v3/options/global_info`;

const getResponse = async (requestURL) => {
  const request = await fetch(requestURL);
  const response = await request.json();

  return await response;
}

const getPagesData = async () => {
  return await getResponse(URL_GET_ALL_PAGES);
}

const getCarData = async () => {
  return await getResponse(URL_GET_ALL_CARS);
}

const getGlobalInfo = async () => {
  return await getResponse(URL_GET_GLOBAL_INFO);
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

    const WordpressData = await Promise.all([getCarData(), getPagesData(), getGlobalInfo()]);

    const CARS_DATA = WordpressData[0];
    const PAGES_DATA = WordpressData[1];
    const GLOBAL_DATA = WordpressData[2].acf.website_options;
    
    PAGES_DATA.forEach(page => {   
        createPage({
          path: `${page.slug === 'home' ? '/' : page.slug}`,
          component: require.resolve(`./src/templates/standard.route.jsx`),
          context: {
            page: page,
            cars: CARS_DATA,
            globalInfo: GLOBAL_DATA
          }
        }) 
    })
}








