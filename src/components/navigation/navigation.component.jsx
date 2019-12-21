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
        <header>
            <nav className="container">
                <Logo />
                <Hamburger onClick={() => setNavVisible(!navVisible)} />
                <ul className={`${navVisible ? 'visible' : ''} navigation`}>
                    {menu.items.map(({title, slug}, i) => (
                    <li key={i}>
                        <Link to={`/${slug}`} activeClassName="active-nav">{title}</Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;