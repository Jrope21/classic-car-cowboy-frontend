import React from 'react';
import './car-slide.styles.scss';

import { Link } from 'gatsby';

function CarSlide({ slug, img, title, availability, year }) {
    console.log()
    return (
        <Link to={slug} className="car-slide">
            <div className="text">
                <span className={`
                    availabilty
                    ${availability ? 'success' : 'error'}`}
                >
                    {availability ? 'Available' : 'Not Available'}
                </span>
                <h1 className="car-name">{title}</h1>
                <img src={`https://createboldly.net/wp-content/uploads/2020/02/${year}.png`} alt="The year of the currently displayed car" className="car-year"/>
            </div>
            <img src={img.url} alt={img.alt} className="car-image"/>
        </Link>
    )
}

export default CarSlide;