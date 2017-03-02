import React, { PropTypes } from "react"
import cx from "classnames"

import styles from './index.css'

const Section = ({ heading, children, className, ...otherProps }) => (
  <section
    className={ cx({
      [className]: className,
      [styles.container]: true,
    })}
    { ...otherProps }
  >
    {heading && <h1>{heading}</h1>}
    <div className={ styles.content }>
      {children}
    </div>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  className: PropTypes.string,
}

Section.defaultProps = {
  heading: "",
}

export default Section
