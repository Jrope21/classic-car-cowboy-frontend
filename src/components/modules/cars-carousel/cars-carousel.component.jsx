import React, { useRef } from 'react';
import './cars-carousel.styles.scss';

import { FaFacebookF } from 'react-icons/fa'

import Slider from "react-slick";

import Arrow from '../../helpers/arrow/arrow.component';
import CarSlide from './car-slide/car-slide.component';

// import { getSelectedCarInfoFromPostObj } from '../../../lib/_helpers.js';

function CarsCarousel({ acf, cars, global: { facebook_url }}) {



    const CarouselCars = cars.slice(0, 10);
    console.log(CarouselCars)
    let slider = useRef();

    const carouselSettings = {
      dots: false,
      arrows: true,
      infinite: true,
      nextArrow: <Arrow direction="right" bold={true} />,
      prevArrow: <Arrow direction="left" bold={true} />,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };

    
    return (
        <section className="cars-carousel container module">
          
            <div className="cars-slider">
                <div className="slider-top-bar">
                  <a href={facebook_url} target="blank" className="facebook-icon">          
                      <FaFacebookF />
                  </a>
                  <h1 className="title">Classic Car Cowboy</h1>
                </div>
                <Slider {...carouselSettings} ref={c => (c = slider = c)}>
                    {CarouselCars.map(({ acf: { car_images }}, i) => (
                      <CarSlide src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default CarsCarousel;