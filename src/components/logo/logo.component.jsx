import React from 'react';
import './logo.styles.scss';

import HatLogo from '../../images/Logo-hat.svg';

function Logo({ ...otherProps }) {
    
    return (
        <>
            <img {...otherProps} src={HatLogo} alt="wasssupp"/>
        </>
    )
}

export default Logo;