import React from 'react';
import './featured-cars-listing.styles.scss';

import { Link } from 'gatsby'

import { getSelectedCarInfoFromPostObj } from '../../../lib/_helpers.js';

function FeaturedCarsListing({acf, cars}) {

    const { car_selection } = acf;
    const allSelectedCarInformation = getSelectedCarInfoFromPostObj({selectedCars: car_selection, allCars: cars});

    return (
        <div className="module featured-cars-listing container">
            {allSelectedCarInformation.map(({slug, acf: {car_model, car_year, car_availability, car_images}}, i) => (
                <div className="car-listing">
                    <div className="car-thumb">
                    <span className={`
                        availability
                        ${car_availability ? 'success' : 'error'}`}
                    >
                        {car_availability ? 'Available' : 'Not Available'}
                    </span>
                        <img src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} />
                    </div>
                    <div className="car-text">
                        <p className="model">{`${car_year}`}</p>
                        <h4 className="car-name">{car_model}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedCarsListing;