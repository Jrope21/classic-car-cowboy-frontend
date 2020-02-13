import React from 'react';
import './arrow.styles.scss';

function Arrow({direction, className, ...otherProps}) {

    return (
        <span className={`arrow
           ${direction === 'left' ? 'arrow-left' : ''} 
           ${direction === 'right' ? 'arrow-right' : ''} 
           ${className}
        `} {...otherProps}></span>
    )
}

export default Arrow;