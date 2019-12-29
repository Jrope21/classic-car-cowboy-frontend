const fetch = require("node-fetch");
const path = require(`path`)
const BASE_URL = `https://createboldly.net`;
const URL_GET_ALL_PAGES = `${BASE_URL}/index.php/wp-json/wp/v2/pages?per_page=100`;

const getPagesData = async () => {
  const request = await fetch(URL_GET_ALL_PAGES);
  const response = await request.json();

  return await response;
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  
    const PAGES_DATA = await getPagesData();

    console.log(PAGES_DATA);

    PAGES_DATA.forEach(page => {
      createPage({
        path: `${page.slug}`,
        component: require.resolve(`./src/templates/standard.route.jsx`),
        context: {
          acf: page.acf
        }
      })
    })
}