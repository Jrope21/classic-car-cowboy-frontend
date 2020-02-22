import React from 'react';
import './arrow.styles.scss';

function Arrow({direction, className, bold = false, ...otherProps}) {

    return (
        <span className={`arrow
            ${bold ? 'bold' : ''}
            ${direction === 'left' ? 'arrow-left' : ''} 
            ${direction === 'right' ? 'arrow-right' : ''} 
            ${className}
        `} {...otherProps}></span>
    )
}

export default Arrow;