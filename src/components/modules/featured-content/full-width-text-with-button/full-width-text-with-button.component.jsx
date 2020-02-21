import React from 'react';

import { Link } from 'gatsby';
import CCCButtonLink from '../../../helpers/ccc-button-link/ccc-button-link.component';

function FullWidthTextWithButton({ acf }) {

    const { content, button } = acf;

    return (
        <section className="full-width-text-with-button module">
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <CCCButtonLink url={button.url}>{button.title}</CCCButtonLink>
            </div>
        </section>
    )
}

export default FullWidthTextWithButton;