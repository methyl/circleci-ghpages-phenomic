import React from "react"

import Products from "../Products"

import Body from "../../components/Body"

import styles from "./index.css"

const Product = (props) => {
  return (
    <Products { ...props }>
      <Body {...props} className={styles.body} />
    </Products>
  )
}

export default Product
