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
const path = require(`path`);
const API = require('./src/lib/_config.js');

const getPagesData = async () => await getResponse(API.ENDPOINTS.ALLPAGES);
const getCarData = async () => await getResponse(API.ENDPOINTS.ALLCARS);
const getGlobalInfo = async () => await getResponse(API.ENDPOINTS.GLOBALINFO);
const getNavigationItems = async () => await getResponse(API.ENDPOINTS.NAVIGATION);

const getResponse = async (requestURL) => {
  const request = await fetch(requestURL);
  const response = await request.json();

  return await response;
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

    const WordpressData = await Promise.all([getCarData(), getPagesData(), getGlobalInfo(), getNavigationItems()]);

    const CARS_DATA = WordpressData[0];
    const PAGES_DATA = WordpressData[1];
    const GLOBAL_DATA = WordpressData[2].acf.website_options;
    const NAVIGATION_ITEMS = WordpressData[3];
    
    PAGES_DATA.forEach(page => {   
        createPage({
          path: `${page.slug === 'home' ? '/' : page.slug}`,
          component: require.resolve(`./src/templates/standard.route.jsx`),
          context: {
            navigation: NAVIGATION_ITEMS,
            page: page,
            cars: CARS_DATA,
            globalInfo: GLOBAL_DATA
          }
        }) 
    })
}