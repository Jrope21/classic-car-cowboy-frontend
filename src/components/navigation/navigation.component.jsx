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

    return (
        <>
            <header>
                <nav className="container">
                    <Logo />
                    <Hamburger active={navVisible ? 'active' : ''} onClick={() => setNavVisible(!navVisible)} />
                    <div className={`${navVisible ? 'visible' : ''} navigation`}>
                        <span className="overlay"></span>
                        <ul className={`navigation-list`}>
                            {menu.items.map(({title, slug}, i) => (
                            <li key={i}>
                                <Link to={`/${slug}`} activeClassName="active-nav">{title}</Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
            <span className="fixed-nav-offset"></span>
        </>
    )
}

export default Navigation;