import React from 'react';
import './hero-slider.styles.scss';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function HeroSlider({slide, active}) {
    const sliderImages = useStaticQuery (graphql`query slides {
        allWordpressPage {
          edges {
            node {
              acf {
                hero_carousel_page {
                  hero_image_slide {
                    source_url
                  }
                }
              }
            }
          }
        }
      }`
    )

      console.log(sliderImages)

    return (
        <div className="hero-slider">

        </div>
    )
}

export default HeroSlider;



// const { menu: { edges: [{node: menu}]}} = useStaticQuery (
//     graphql`
//         query menu {
//             menu: allWordpressMenusMenusItems
//                 {
//                 edges {
//                     node {
//                         items{
//                             title
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `
// )