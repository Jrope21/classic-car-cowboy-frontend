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
const URl_GET_ALL_CARS = `${BASE_URL}/index.php/wp-json/wp/v2/cars?per_page=100`;

const getPagesData = async () => {
  const request = await fetch(URL_GET_ALL_PAGES);
  const response = await request.json();

  return await response;
}

const getCarData = async () => {
  const request = await fetch(URl_GET_ALL_CARS);
  const response = await request.json();

  return await response;
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

    const WordpressData = await Promise.all([getCarData(), getPagesData()]);

    const PAGES_DATA = WordpressData[1];
    const CARS_DATA = WordpressData[0];
    
    PAGES_DATA.forEach(page => {   
        createPage({
          path: `${page.slug === 'home' ? '/' : page.slug}`,
          component: require.resolve(`./src/templates/standard.route.jsx`),
          context: {
            page: page,
            cars: CARS_DATA
          }
        }) 
    })
}