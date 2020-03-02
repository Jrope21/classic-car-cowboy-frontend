import React, { useState } from 'react';
import './all-cars-gallery.styles.scss'; 

function AllCarsGallery({ cars }) {

    console.log(cars)
    const [activeCars, setActiveCars] = useState(cars.slice(0, 6));

    console.log('active cars', activeCars)

// TODO -- set up pagination for every 6th car
// TODO -- style for desktops

    return (
        <div className="all-cars-gallery container module">
            <div className="all-cars-container">
                {activeCars.map(({acf: { car_images }}) => (
                    <div className="car-thumb-container">
                        <img src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} className="img-cover img-dropshadow"/>
                    </div>
                ))}
            </div>
            <div className="pagination">

            </div>
        </div>
    )
}

export default AllCarsGallery;