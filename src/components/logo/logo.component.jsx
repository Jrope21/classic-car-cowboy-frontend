import React from 'react';
import './logo.styles.scss';

import HatLogo from '../../images/Logo-hat.svg';

function Logo() {
    
    return (
        <>
            <span className="logo"><img src={HatLogo} alt="wasssupp"/></span>
        </>
    )
}

export default Logo;