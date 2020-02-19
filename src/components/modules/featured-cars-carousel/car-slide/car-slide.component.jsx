import React from 'react';
import './car-slide.styles.scss';

import { Link } from 'gatsby';

function CarSlide({ slug, img, title, availability, year }) {

    return (
        <Link to={slug} className="car-slide">
            <div className="text">
                <span className={`
                    availability
                    ${availability ? 'success' : 'error'}`}
                >
                    {availability ? 'Available' : 'Not Available'}
                </span>
                <h1 className="car-name bold">{title}</h1>
            </div>
            <img src={img.desktop.url} alt={img.alt} className="car-image desktop"/>
            <img src={img.mobile.url} alt={img.alt} className="car-image mobile"/>
        </Link>
    )
}

export default CarSlide;