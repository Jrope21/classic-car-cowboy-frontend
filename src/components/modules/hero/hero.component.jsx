import React from 'react';
import './hero.styles.scss';

import Slider from 'react-slick';

function Hero({ acf: { title, content, link, images }}) {

    const carouselSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        appendDots: dots => (
            <div className="controls">
                <ul> {dots} </ul>
            </div>
        ),
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="hero container module">
            <div className="hero-text">
                <h1 className="title">The gallery</h1>
                <p>We consistently stock high quality classic cars that are guaranteed to turn heads. Buy a piece of history with out selection of hot rods, exotics, collectables, and more!</p>
            </div>

            <div className="hero-slider">
                {images && 
                    <Slider {...carouselSettings}>
                        {images.map((image, i) => (
                            <div className="slide-container img-dropshadow">
                                <img className="img-cover" src={image.url} alt={image.alt} />
                            </div>
                        ))}
                    </Slider>
                }
            </div>
        </div>
    )
}

export default Hero;