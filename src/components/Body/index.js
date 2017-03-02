import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import Loading from "../../components/Loading"

import styles from "./index.css"

const Body = ({ body, isLoading }) => (
  <div className={ styles.container }>
    {
      isLoading ?
        <Loading />
        :
        <BodyContainer>{ body }</BodyContainer>
    }
  </div>
)

Body.propTypes = {
  isLoading: PropTypes.bool,
  body: PropTypes.string,
}

Body.defaultProps = {
  isLoading: false,
  body: "",
}

export default Body
