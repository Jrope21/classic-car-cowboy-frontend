import React from 'react';
import './hamburger.styles.scss';

function Hamburger({active, ...otherProps}) {

    return (
        <>
            <span {...otherProps} aria-label="A hamburger icon to toggle the navigation" className={`${active} hamburger`}></span>
        </>
    )
}

export default Hamburger;