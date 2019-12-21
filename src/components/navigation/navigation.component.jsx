import React from 'react';
import { Link, useStaticQuery, graphql} from 'gatsby'

import './navigation.styles.scss'

function Navigation() {
    const { menu: { edges: [{node}]}} = useStaticQuery (
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

            </nav>
        </header>
    )
}

export default Navigation;