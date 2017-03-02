import React, { PropTypes } from "react"
import { BodyContainer, Link } from "phenomic"

import Section from "../Section"
import Button from "../Button"

import heroImage from "./assets/hero-image.jpg"
import styles from "./index.css"

const Hero = ({ body }) => (
  <Section
    className={ styles.container }
    style={{ backgroundImage: `url("${heroImage}")`}}
  >
    <div className={ styles.content }>
      <div className={ styles.body }>
        <BodyContainer>{ body }</BodyContainer>
      </div>
      <Link to="about" className={ styles.button }>
        <Button color="red">Więcej o firmie</Button>
      </Link>
    </div>
  </Section>
)

Hero.propTypes = {
  body: PropTypes.string,
}

Hero.defaultProps = {
  body: "",
}

export default Hero
