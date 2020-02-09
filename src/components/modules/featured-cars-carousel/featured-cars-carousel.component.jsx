import React, { useState } from 'react';
import './featured-cars-carousel.styles.scss';

import { Link, useStaticQuery, graphql } from 'gatsby';

import CarSlide from './car-slide/car-slide.component';

function FeaturedCarsCarousel({ acf, cars }) {

    const { car_selection } = acf;
    const allCarSlugs = storePostNameWithIndex();
    const allSelectedCarInformation = buildSelectedCarInformation();

    const [CarouselCars, setCarouselCars] = useState(allSelectedCarInformation);
    
    function storePostNameWithIndex() {
      let allSlugsWithIndex = {}

      cars.forEach(({ slug }, i) => {
        allSlugsWithIndex[slug] = i;
      })

      return allSlugsWithIndex;
    }

    function buildSelectedCarInformation() {    
      const selectedCarInformation = [];
      
      car_selection.forEach(({ post_name }) => {
          const currentCarIndex = allCarSlugs[post_name];
          selectedCarInformation.push(cars[currentCarIndex]);
      })

      return selectedCarInformation
    }

    console.log(CarouselCars);

    return (
        <div className="featured-cars-carousel container">
          <div className="featured-cars-slider">
            {CarouselCars.map(car => (
              <CarSlide
                slug={car.slug}
                title={car.title.rendered}
                availability={car.acf.car_availability}
                img={car.acf.featured_image}
                year={car.acf.car_year}
              />
            ))}
          </div>
            <div className="controls">
              <button className="prev"></button>
              <div className="dot-controls-container">
                <button className="dot active"></button>
                <button className="dot"></button>
                <button className="dot"></button>
                <button className="dot"></button>
              </div>
              <button className="next"></button>
            </div>
        </div>
    )
}

export default FeaturedCarsCarousel;