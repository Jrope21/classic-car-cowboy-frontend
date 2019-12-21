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
                                url
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
                    {menu.items.map(({title, url}) => (
                        <li><a href={url}>{title}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;