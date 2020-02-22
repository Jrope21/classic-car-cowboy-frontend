import React from 'react';
import './facebook-icon.styles.scss'

import { FaFacebookF } from 'react-icons/fa'

function FacebookIcon({ url, className, ...otherProps }) {

    return (
        <a href={url} target="blank" className={`facebook-icon ${className}`} {...otherProps} >          
            <FaFacebookF />
        </a>
    )
}

export default FacebookIcon;