import React from 'react';
import './full-width-text-with-button.styles.scss';

import { Link } from 'gatsby';
import CCCButtonLink from '../../../helpers/ccc-button-link/ccc-button-link.component';

function FullWidthTextWithButton({ acf }) {

    const { content, button } = acf;

    // wordpress will always return the data wrapped in a p tag for this
    let filteredContent = content.replace('<p>', '').replace('</p>', '');

    return (
        <section className="full-width-text-with-button module light-bg">
            <div className="container">
                <h1 dangerouslySetInnerHTML={{ __html: filteredContent }} />
                <CCCButtonLink url={button.url}>{button.title}</CCCButtonLink>
            </div>
        </section>
    )
}

export default FullWidthTextWithButton;