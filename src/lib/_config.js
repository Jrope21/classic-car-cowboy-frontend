const BASE_URL = `https://createboldly.net`;

const ENDPOINTS = {
    NAVIGATION: `${BASE_URL}/wp-json/menus/v1/menus/main-menu`,
    ALLPAGES: `${BASE_URL}/index.php/wp-json/wp/v2/pages?per_page=100`,
    ALLCARS: `${BASE_URL}/index.php/wp-json/wp/v2/cars?per_page=100`,
    GLOBALINFO: `${BASE_URL}/wp-json/acf/v3/options/global_info`
}

module.exports = {
    BASE_URL,
    ENDPOINTS
};