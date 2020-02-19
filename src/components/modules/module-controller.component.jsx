import React from 'react';

import FeaturedCarsCarousel from './featured-cars-carousel/featured-cars-carousel.component.jsx';
import ContentArea from './content-area/content-area.component.jsx';
import FeaturedCarsListing from './featured-cars-listing/featured-cars-listing.component.jsx';

function ModuleController({ acf, cars }) {

    function renderCorrectLayout(acfModule, i) {
        const { acf_fc_layout : layout } = acfModule

        switch (layout) {
            case "featured_cars_listing": 
                return <FeaturedCarsListing cars={cars} acf={acfModule} key={i} />
            case "featured_cars_carousel":
                return <FeaturedCarsCarousel cars={cars} acf={acfModule} key={i} />
            case "content_area":
                return <ContentArea acf={acfModule} key={i} />
            default:
                return null
        }
    }


    if(acf) return (
        <>
            {acf.map((module, i) => (renderCorrectLayout(module, i)))}
        </>
    )
    return null;

}

export default ModuleController;