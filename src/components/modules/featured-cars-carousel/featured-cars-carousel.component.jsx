import React, { useState, useRef } from 'react';
import './featured-cars-carousel.styles.scss';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";

import CarSlide from './car-slide/car-slide.component';
import Arrow from '../../helpers/arrow/arrow.component';

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

    let slider = useRef();

    function buildSelectedCarInformation() {    
      const selectedCarInformation = [];
      
      car_selection.forEach(({ post_name }) => {
          const currentCarIndex = allCarSlugs[post_name];
          selectedCarInformation.push(cars[currentCarIndex]);
      })

      return selectedCarInformation
    }

    const carouselSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      appendDots: dots => (
        <div class="controls">
          <Arrow onClick={() => slider.slickPrev()} direction="left"/>
          <ul> {dots} </ul>
          <Arrow onClick={() => slider.slickNext()} direction="right"/>
        </div>
      ),
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    console.log(CarouselCars);

    return (
        <div className="featured-cars-carousel container">
          <div className="featured-cars-slider">
            <Slider {...carouselSettings} ref={c => (c = slider = c)}>
              {CarouselCars.map(car => (
                <CarSlide
                  slug={car.slug}
                  title={car.acf.car_model}
                  availability={car.acf.car_availability}
                  img={car.acf.featured_image}
                  year={car.acf.car_year}
                />
              ))}
            </Slider>
          </div>
            {/* <div className="controls">
              <button onClick={() => slider.slickNext()} id="slick-arr" className="prev personal buttnnnnnn arrow arrow-left"></button>
              <div className="dot-controls-container">
                {allSelectedCarInformation.map((a, i) => {
                  return <button className={`dot ${i === 0 ? 'active' : ''}`}></button>
                })}
              </div>
              <button to="prev" className="next"></button>
            </div> */}
        </div>
    )
}

export default FeaturedCarsCarousel;