import React, {useState} from 'react';
import './navigation.styles.scss'

import { Link, useStaticQuery, graphql} from 'gatsby'

import Hamburger from './hamburger/hamburger.component.jsx';
import Logo from '../logo/logo.component.jsx';

function Navigation() {
    const { menu: { edges: [{node: menu}]}} = useStaticQuery (
        graphql`
            query menu {
                menu: allWordpressMenusMenusItems
                    {
                    edges {
                        node {
                            items{
                                title
                                slug
                            }
                        }
                    }
                }
            }
        `
    )
    
    const [navVisible, setNavVisible] = useState(false)

    const leftNavigation = menu.items.splice(0, Math.ceil(menu.items.length / 2));
    const rightNavigation = menu.items;

    function renderNavigationItems(menuItems) {
        return menuItems.map(({title, slug}, i) => (
            <li key={i}>
                <Link to={`/${slug}`} activeClassName="active-nav">{title}</Link>
            </li>
        ))
    }

    return (
        <>
            <header>
                <nav className="container">
                    <div className="mobile-left">
                        <Logo />
                        <p className="logo-text">
                            <span>Classic </span>
                            Car Cowboy
                        </p>
                    </div>
                    <div className="mobile-right">
                        <a className="facebook mobile" href="http://" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <Hamburger active={navVisible ? 'active' : ''} onClick={() => setNavVisible(!navVisible)} />
                    </div>
                    
                    <div className={`${navVisible ? 'visible' : ''} navigation`}>
                        <div className="left">
                            <ul className={`navigation-list`}>
                                {renderNavigationItems(leftNavigation)}
                            </ul>
                        </div>
                        <div className="right">
                            <ul className={`navigation-list`}>
                                <li className="">
                                    <a className="facebook desktop" href="http://" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </li>
                                {renderNavigationItems(rightNavigation)}
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