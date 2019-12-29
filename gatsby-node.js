// const path = require(`path`)
// const slash = require(`slash`)
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   // query content for WordPress posts
//   const result = await graphql(`
//     query {
//       allWordpressPage {
//         edges {
//           node {
//             id
//             slug
//             acf
//           }
//         }
//       }
//     }
//   `)
//   const data = await result;
//   console.log('data doe', data);
//   const pageTemplate = path.resolve(`./src/templates/standard.route.jsx`);
//   await result.data.allWordpressPage.edges.forEach(edge => {
//     createPage({
//       // will be the url for the page
//       path: edge.node.slug,
//       // specify the component template of your choice
//       component: slash(pageTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this posts's data.
//       context: {
//         id: edge.node.id,
//         acf: edge.node.acf
//       },
//     })
//   })
// }

const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/standard.route.jsx`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}