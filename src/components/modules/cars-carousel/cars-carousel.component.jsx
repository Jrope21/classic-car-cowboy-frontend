import React, { useRef } from 'react';
import './cars-carousel.styles.scss';

import Slider from "react-slick";

import Arrow from '../../helpers/arrow/arrow.component';

// import { getSelectedCarInfoFromPostObj } from '../../../lib/_helpers.js';

function CarsCarousel({ acf, cars }) {

    const CarouselCars = cars.slice(0, 10);
    console.log(CarouselCars)
    let slider = useRef();

    const carouselSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      appendDots: dots => (
        <div className="controls">
          <Arrow onClick={() => slider.slickPrev()} direction="left"/>
          <ul> {dots} </ul>
          <Arrow onClick={() => slider.slickNext()} direction="right"/>
        </div>
      ),
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };

    
    return (
        <div className="cars-carousel container module">
            <div className="cars-slider">
                <Slider {...carouselSettings} ref={c => (c = slider = c)}>
                {CarouselCars.map(({ acf: { car_images }}, i) => (
                  <div key={i} className="slide-wrapper">
                      <img className="car-image" src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} />
                  </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default CarsCarousel;