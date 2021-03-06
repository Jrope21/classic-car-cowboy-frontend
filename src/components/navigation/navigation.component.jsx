import React, {useState, useContext} from 'react';
import './navigation.styles.scss'

import { Link } from 'gatsby'

import Hamburger from './hamburger/hamburger.component.jsx';
import Logo from '../logo/logo.component.jsx';
import CloseBtn from '../helpers/close-btn/close-btn.component';
import Arrow from '../helpers/arrow/arrow.component';

import { GlobalContext } from '../../lib/context/_global.context';

// TODO -- merge "left side" && "right side" navigation into one
// - this is no longer needed because of a change in design

function Navigation({ navigation }) {

    const globalCon = useContext(GlobalContext);

    const [navVisible, setNavVisible] = useState(false)

    const leftNavigation = navigation.items.slice(0, Math.ceil(navigation.items.length / 2));
    const rightNavigation = navigation.items.slice(Math.ceil(navigation.items.length / 2));

    function renderNavigationItems(menuItems) { // this is running every rerender -- might need to readjust this
        return menuItems.map(({title, slug}, i) => (
            <li key={i}>
                <Link onClick={closeNav} to={`/${slug}`} activeClassName="active-nav">{title} <Arrow className="menu-arrow" direction={'right'} /></Link>          
            </li>
        ))
    }

    const closeNav = () => {
        setNavVisible(false);
    }

    const openNav = () => {
        setNavVisible(true);
    }

    return (
        <>
            <header>
                <nav className="container">
                    <Link to="/" className="mobile-left mobile-logo">
                        <Logo />
                        <p className="logo-text">
                            <span>Classic </span>
                            Car Cowboy
                        </p>
                    </Link>
                    <div className="mobile-right">
                        <a className="facebook mobile" href="http://" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <Hamburger active={navVisible ? 'active' : ''} onClick={() => openNav()} />
                    </div>
                    <span onClick={() => closeNav()} className={`${navVisible ? 'visible' : ''} nav-overlay`}></span>
                    <div className={`${navVisible ? 'visible' : ''} navigation`}>
                    
                        <div className="left">
                            <ul className={`navigation-list`}>
                                <li className="close">
                                    <CloseBtn onClick={() => closeNav()} />
                                </li>
                                <li className="home">
                                    <Link to={`/`} onClick={closeNav} activeClassName="active-nav">Home <Arrow className="menu-arrow" direction={'right'} /></Link>
                                </li>
                                {renderNavigationItems(leftNavigation)}
                            </ul>
                        </div>
                        <div className="right">
                            <ul className={`navigation-list`}>
                                
                                {renderNavigationItems(rightNavigation)}
                                <li className="facebook desktop">
                                    <a className="facebook desktop" href="http://" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
            <span className="fixed-nav-offset"></span>
        </>
    )
}

export default Navigation;