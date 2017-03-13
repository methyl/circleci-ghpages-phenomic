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
    <div className={ styles.content }>
      {heading &&
        <div className={ styles.heading }>
          <h1>{heading}</h1>
        </div>
      }
      <div className={ styles.body }>
        {children}
      </div>
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
