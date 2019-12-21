import React from 'react';
import './hamburger.styles.scss';

function Hamburger({...otherProps}) {

    return (
        <>
            <span {...otherProps} aria-label="A hamburger icon to toggle the navigation" className="hamburger"></span>
        </>
    )
}

export default Hamburger;