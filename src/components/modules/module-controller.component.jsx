import React from 'react';

import HeroSlider from './hero-slider/hero-slider.component.jsx';

function ModuleController({ module }) {
    console.log(module)

    // if(acf) {
    //     return (
    //         <>
    //             {acf.map(layout => {
    //                 if(Object.keys(layout) === 'hero') {
    //                     return <Hero />
    //                 } else if (Object.keys(layout) === 'hero') {
    //                     return <HeroSlider />
    //                 }
    //             })}
    //         </>
    //     )
    // } else {
    //     return null;
    // }
    return <div></div>
}

export default ModuleController;