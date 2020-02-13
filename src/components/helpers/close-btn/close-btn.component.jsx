import React from 'react';
import './close-btn.styles.scss';

function CloseBtn({...otherProps}) {

    return (
        <span {...otherProps} className="close-btn"></span>
    )
}

export default CloseBtn;