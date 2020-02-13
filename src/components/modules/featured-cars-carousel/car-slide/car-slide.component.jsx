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
                <h1 className="car-name bold">{title}</h1>
                {/* <img src={`https://createboldly.net/wp-content/uploads/2020/02/${year}.png`} alt="The year of the currently displayed car" className="car-year mobile"/>  */}
            </div>
            <img src={img.desktop.url} alt={img.alt} className="car-image desktop"/>
            <img src={img.mobile.url} alt={img.alt} className="car-image mobile"/>
        </Link>
    )
}

// TODO -- need to crop year into featured image -- need desktop and mobile variations of the image

export default CarSlide;