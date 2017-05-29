import React, { PropTypes } from "react"

import Page from "../Page"
import Section from "../../components/Section"
import Body from "../../components/Body"

import Menu from "./Menu"

import styles from "./index.css"

const filter = {
  byLayout: (arr, layout) => (
    arr.filter(obj => obj.layout === layout).sort((a, b) => a.index - b.index)
  ),
  byUrl: (arr, url) => arr.filter(obj => obj.__url.match(url)),
};

// const getProductsTree = (collection) => {
//   const { byLayout, byUrl } = filter;
//   const categories = byLayout(collection, "Category");
//   const subcategories = byLayout(collection, "Subcategory");
//   const products = byLayout(collection, "Product");
//
//   return categories.map(c => {
//     const fs = byUrl(subcategories, c.__url);
//
//     if (fs.length) {
//       return Object.assign(c, {
//         subcategories: fs.map(s => Object.assign(s, {
//           products: byUrl(products, s.__url),
//         })),
//       });
//     }
//
//     return Object.assign(c, {
//       products: byUrl(products, c.__url),
//     });
//   });
// };

const Products = (props, { collection }) => (
  <Page { ...props }>
    <Section className={styles.section}>
      <div className={styles.menu}>
        <Menu tree={filter.byLayout(collection.slice(0), "Category")} />
      </div>
      <div className={styles.content}>
        {props.children || <Body {...props} bodyClassName={styles.body} />}
      </div>
    </Section>
  </Page>
);

Products.propTypes = {
  children: PropTypes.node
}

Products.contextTypes = {
  collection: PropTypes.array
}

export default Products
