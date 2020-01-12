import React, { useState } from 'react';
import './hero-slider.styles.scss';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function HeroSlider({slide, active}) {
    // const sliderImages = useStaticQuery (graphql`query slides {
    //     allWordpressPage {
    //       edges {
    //         node {
    //           acf {
    //             hero_carousel_page {
    //               hero_image_slide {
    //                 source_url
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }`
    // )

      
      // const BASE_URL = `https://createboldly.net`;
      // const URL_GET_ALL_PAGES = `${BASE_URL}/index.php/wp-json/wp/v2/pages?per_page=100`;

      // const getPagesData = async () => {
      //   const request = await fetch(URL_GET_ALL_PAGES);
      //   const response = await request.json();
      //   console.log(response)
      //   return await response;
      // }
      // const test = async () => {
      //   let data = await getPagesData();

      //   console.log(data);
      // }
      // test();
      // getPagesData();
      // console.log(getPagesData)
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