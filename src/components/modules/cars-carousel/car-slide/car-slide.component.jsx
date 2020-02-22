import React from 'react';
import './car-slide.styles.scss';

function CarSlide({ src, alt }) {

    return (
        <div className="car-slide">
            <img src={src} alt={alt}/>
        </div>
    )
}

export default CarSlide;