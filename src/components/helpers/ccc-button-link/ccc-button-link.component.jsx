import React from 'react';

import { Link } from 'gatsby';
import { convertLink } from '../../../lib/_helpers';

function CCCButtonLink({url, children, className, ...otherProps}) {

    url = convertLink(url);

    if(!url.includes('http')) return (
        <Link to={url} className={`ccc-button ${className}`} {...otherProps} >
            {children}
        </Link>
    )
    return <a href={url} className={`ccc-button ${className}`} {...otherProps} >{children}</a>
}

export default CCCButtonLink;