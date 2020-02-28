import React from 'react';
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
    console.log(images)

    return (
        <div className="hero">

            <div className="hero-slider">
                {images && 
                    <Slider {...carouselSettings}>
                        {images.map((image, i) => (
                            <div className="slide-container">
                                <img src={image.url} alt={image.alt} />
                            </div>
                        ))}
                    </Slider>
                }
            </div>
        </div>
    )
}

export default Hero;