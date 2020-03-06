import React, { useState, useEffect } from 'react';
import './all-cars-gallery.styles.scss'; 
import Arrow from '../../helpers/arrow/arrow.component';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function AllCarsGallery({ acf, cars }) {

    console.log(acf)
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

    if (activeCars) return (
        <div className="all-cars-gallery container module">
            <div className="the-content top-content" dangerouslySetInnerHTML={{ __html: acf.content }}/>
            <TransitionGroup className="all-cars-container">
                {activeCars.map(({acf: { car_images }}, i) => (
                    <CSSTransition key={car_images[0].image_selection.url + i + Math.random() * 10} timeout={300} classNames={`position-${i} car-thumb-container`}>
                        <div className={`position-${i} car-thumb-container`}>
                            <div className="text-pop-up">
                                <p className="car-year"></p>
                                <p className="car-name"></p>
                            </div>
                            <img src={car_images[0].image_selection.url} alt={car_images[0].image_selection.alt} className="img-cover img-dropshadow"/>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            {groupedCars.length > 1 &&
                <div className="pagination">
                    <Arrow 
                        className="pagination-prev"
                        direction={'left'}
                        onClick={() => handleCarPagination(
                            activeCarGroupIndex === 0 ? groupedCars.length - 1 : activeCarGroupIndex - 1
                        )}
                    />  
                    {groupedCars.map((carGroup, i) => (
                        <span 
                            className={`pagination-number ${activeCarGroupIndex === i ? 'bold' : ''}`}
                            onClick={() => handleCarPagination(i)}
                            key={`active-car-${i}`}
                        >{i === groupedCars.length - 1 ? i : `${i},`}</span>
                    ))} 
                    <Arrow
                        className="pagination-next"
                        direction={'right'}
                        onClick={() => handleCarPagination(
                            activeCarGroupIndex === groupedCars.length - 1 ? 0 : activeCarGroupIndex + 1
                        )}
                    /> 

                </div>
            }
        </div>
    )

    return null;
}

export default AllCarsGallery;