import React, { PropTypes } from "react"

import Products from "../Products"

import Body from "../../components/Body"

const Subcategory = (props) => {
  return (
    <Products {...props}>
      <Body {...props} />
    </Products>
  );
};

Subcategory.contextTypes = {
  collection: PropTypes.array.isRequired
}

export default Subcategory
