import React, { PropTypes } from "react"

import styles from './index.css'

const Section = ({ heading, children }) => (
  <section className={ styles.container }>
    {heading && <h1>{heading}</h1>}
    <div className={ styles.content }>
      {children}
    </div>
  </section>
)

Section.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  heading: "",
}

export default Section
