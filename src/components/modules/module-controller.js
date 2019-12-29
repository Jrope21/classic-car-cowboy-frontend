import React from 'react';

import Hero from './hero/hero.component.jsx';
import HeroSlider from './hero-slider/hero-slider.component.jsx';

function ModuleController({ acf }) {

    if(acf) {
        return (
            <>
                {acf.map(layout => {
                    if(Object.keys(layout) === 'hero') {
                        return <Hero />
                    } else if (Object.keys(layout) === 'hero') {
                        return <HeroSlider />
                    }
                })}
            </>
        )
    } else {
        return null;
    }
}