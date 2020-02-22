import React from 'react';

import FeaturedCarsCarousel from './featured-cars-carousel/featured-cars-carousel.component.jsx';
import ContentArea from './content-area/content-area.component.jsx';
import FeaturedCarsListing from './featured-cars-listing/featured-cars-listing.component.jsx';
import FullWidthTextWithButton from './featured-content/full-width-text-with-button/full-width-text-with-button.component.jsx';
import CarsCarousel from './cars-carousel/cars-carousel.component.jsx';

function ModuleController({ acf, cars, global }) {
    console.log(global);
    function renderCorrectLayout(acfModule, key) {
        const { acf_fc_layout : layout } = acfModule

        switch (layout) {
            case "cars_carousel":
                return <CarsCarousel acf={acfModule} cars={cars} global={global} />
            case "featured_content":
                return renderFeaturedContentLayouts(acfModule, key)
            case "featured_cars_listing": 
                return <FeaturedCarsListing cars={cars} acf={acfModule} key={key} />
            case "featured_cars_carousel":
                return <FeaturedCarsCarousel cars={cars} acf={acfModule} key={key} />
            case "content_area":
                return <ContentArea acf={acfModule} key={key} />
            default:
                return null
        }
    }

    function renderFeaturedContentLayouts(acfModule, key) {
        const { display } = acfModule
        // console.log('test', acfModule)
        switch (display) {
            case "full_width_text_with_button":
                return <FullWidthTextWithButton acf={acfModule} key={key} />
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