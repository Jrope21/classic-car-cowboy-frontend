import React from 'react';
import './hamburger.styles.scss';

function Hamburger({active, ...otherProps}) {

    return (
        <div {...otherProps} class={`hamburger-container ${active}`} >
            <span aria-label="A hamburger icon to toggle the navigation" className={`hamburger`}></span>
        </div>
    )
}

export default Hamburger;