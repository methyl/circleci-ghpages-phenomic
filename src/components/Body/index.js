import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
import cx from "classnames"

import Loading from "../../components/Loading"

import styles from "./index.css"

const Body = ({ body, isLoading, className, bodyClassName }) => (
  <div className={cx({
    [styles.container]: true,
    [className]: className,
  })}>
    {
      isLoading ?
        <Loading />
        :
        <BodyContainer className={cx(bodyClassName)}>
          { body }
        </BodyContainer>
    }
  </div>
)

Body.propTypes = {
  isLoading: PropTypes.bool,
  body: PropTypes.string,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
}

Body.defaultProps = {
  isLoading: false,
  body: "",
  className: "",
  bodyClassName: "",
}

export default Body
