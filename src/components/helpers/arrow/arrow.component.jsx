import React from 'react';
import './arrow.styles.scss';

function Arrow({direction, className}) {

    return (
        <span className={`arrow
           ${direction === 'left' ? 'arrow-left' : ''} 
           ${direction === 'right' ? 'arrow-right' : ''} 
           ${className}
        `} ></span>
    )
}

export default Arrow;