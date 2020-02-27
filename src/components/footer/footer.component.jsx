import React from 'react';
import './footer.styles.scss';

import { footerMenuData } from './footer.data';
import { Link } from 'gatsby';
import Logo from '../logo/logo.component';
import FacebookIcon from '../helpers/facebook-icon/facebook-icon.component';

function Footer({ global }) {

    const { full_name, phone_number, address, facebook_url } = global;

    return (
        <footer>
            <div className="container top-bar">
                <div className="ccc-logo-title">Classic Car Cowboy</div>
                <div className="menu-logo-container">
                    <ul className="footer-menu">
                        {footerMenuData.map(({ title, slug }, i) => (
                            <li>
                                <Link to={slug} activeClassName="active-footer">
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="logo-copyright-container">
                        <Logo className={'footer-logo'} />
                        <p className="copyright">{/*<FacebookIcon className="footer-facebook-icon" url={facebook_url} />*/}@{new Date().getFullYear()} Classic Car Cowboy</p>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <p className="footer-logo-text">TEXA<span className="last-letter">S</span></p>
            </div>
            
        </footer>
    )
}

export default Footer;