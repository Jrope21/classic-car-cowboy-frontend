import React, { useState, useEffect } from 'react';
import './all-cars-gallery.styles.scss'; 

function AllCarsGallery({ cars }) {

    let carsPerGroup = 6;
    
    const [activeCarGroupIndex, setActiveCarGroupIndex] = useState(0);
    const [groupedCars, setGroupedCars] = useState(null);
    const [activeCars, setActiveCars] = useState(null);

    useEffect(() => {
        let allCars = cars;
        setActiveCars(allCars.slice(0, carsPerGroup))
        setGroupedCars(splitCarsIntoGroups(allCars));
    }, [])

    function splitCarsIntoGroups(allCars, groupedCars = []) {
        if(allCars.length < carsPerGroup) {
            groupedCars.push([...allCars]);
            return groupedCars;
        }

        groupedCars.push([...allCars.slice(0, carsPerGroup)]);
        
        return splitCarsIntoGroups(allCars.slice(carsPerGroup), groupedCars);
    }

    function handleCarPagination(indexOfCarGroup) {
        setActiveCarGroupIndex(indexOfCarGroup);
        setActiveCars(groupedCars[indexOfCarGroup]);
    }

    if (activeCars && groupedCars) return (
        <div className="all-cars-gallery container module">
            <div className="all-cars-container">
                {activeCars.map(({acf: { car_images }}) => (
                    <div className="car-thumb-container">
                        <img src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} className="img-cover img-dropshadow"/>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {activeCarGroupIndex !== 0 ? 
                    <button 
                        className="prev"
                        onClick={() => handleCarPagination(activeCarGroupIndex - 1)}
                    >prev</button>
                : null}
                {groupedCars.map((carGroup, i) => (
                    <span 
                        className="pagination-number"
                        onClick={() => handleCarPagination(i)}
                    >{i}</span>
                ))}
                {groupedCars.length > 1 && activeCarGroupIndex !== groupedCars.length - 1 ? 
                    <button 
                        className="next"
                        onClick={() => handleCarPagination(activeCarGroupIndex + 1)}
                    >next</button> 
                : null}
            </div>
        </div>
    )

    return null;
}

export default AllCarsGallery;