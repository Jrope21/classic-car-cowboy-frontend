const API = require('./_config.js');

export function getSelectedCarInfoFromPostObj({selectedCars, allCars}) {
    const allCarSlugsWithIndex = storeCarPostNameWithIndex(allCars);

    const selectedCarInformation = [];
  
    selectedCars.forEach(({ post_name }) => {
        const currentCarIndex = allCarSlugsWithIndex[post_name];
        selectedCarInformation.push(allCars[currentCarIndex]);
    })
  
    return selectedCarInformation
}

function storeCarPostNameWithIndex(cars) {
  let allSlugsWithIndex = {}

  cars.forEach(({ slug }, i) => {
    allSlugsWithIndex[slug] = i;
  })

  return allSlugsWithIndex;
}

export function convertLink(url) {
  url = url.replace(API.BASE_URL, '');

  if(url[url.length - 1] !== '/') url += '/'; // force trailing slash

  return url;
}