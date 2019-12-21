import React from 'react';
import { Link, useStaticQuery, graphql} from 'gatsby'

import './navigation.styles.scss'

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


    return (
        <header>
            <nav>
                {console.log(menu)}
                <ul className="navigation">
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