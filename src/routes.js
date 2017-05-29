import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import About from "./layouts/About"
import Products from "./layouts/Products"
import Category from "./layouts/Category"
import Subcategory from "./layouts/Subcategory"
import Product from "./layouts/Product"
import News from "./layouts/News"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      About,
      Products,
      Category,
      Subcategory,
      Product,
      News,
    }}
  />
)

// const redirectToCategory = ({
//   location: {
//     action,
//     pathname,
//   },
//   params: {
//     category,
//     subcategory
//   }
// }, replaceState) => {
//   if (action === "PUSH") {
//     replaceState({
//       pathname: pathname,
//     })
//   } else {
//     replaceState({
//       pathname: `/products/${category}/`, // add #${subcategory} hash support
//     });
//   }
// };

export default (
  <Route component={ AppContainer }>
    {/* <Route path="products/:category/:subcategory" onEnter={redirectToCategory} /> */}
    <Route path="*" component={ PageContainer } />
  </Route>
)
