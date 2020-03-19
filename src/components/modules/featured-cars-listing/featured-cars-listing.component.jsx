import React, { useContext } from 'react';
import './featured-cars-listing.styles.scss';

import FeaturedFlag from '../../helpers/featured-flag/featured-flag.component';

import { getSelectedCarInfoFromPostObj } from '../../../lib/_helpers.js';
import { AllCars } from '../../../lib/context/_all-cars.context';

function FeaturedCarsListing({ acf }) {

    const allCars = useContext(AllCars);
   
    const { car_selection } = acf;
    const allSelectedCarInformation = getSelectedCarInfoFromPostObj({selectedCars: car_selection, allCars: allCars});

    return (
        <section className="module has-inner-modules featured-cars-listing container">
            {allSelectedCarInformation.map(({slug, acf: {car_model, car_year, car_availability, car_images}}, i) => (
                <div className="car-listing inner-module">
                    <div className="car-thumb">
                        <FeaturedFlag />
                        <span className={`
                            availability
                            ${car_availability ? 'success' : 'error'}`}
                        >
                            {car_availability ? 'Available' : 'Not Available'}
                        </span>
                        <img className="img-cover" src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} />
                    </div>
                    <div className="car-text">
                        <p className="model">{`${car_year}`}</p>
                        <h3 className="car-name">{car_model}</h3>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default FeaturedCarsListing;