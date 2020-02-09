import React from 'react';
import './footer.styles.scss';

function Footer({ globalInfo }) {

    const { full_name, phone_number, address } = globalInfo;

    return (
        <footer>
            <div className="top-bar">
                <p className="full-name bold">{full_name}</p>
                <p className="phone-number bold">{phone_number}</p>
                <p className="address">{address}</p>
            </div>
            <div className="bottom-bar">
                <p className="footer-logo-text">TEXA<span className="last-letter">S</span></p>
            </div>
        </footer>
    )
}

export default Footer;