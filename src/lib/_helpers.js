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