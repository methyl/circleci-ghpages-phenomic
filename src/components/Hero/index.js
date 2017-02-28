import React from "react"
import { Link } from "phenomic"

import Button from "../Button"

import heroImage from "./assets/hero-image.jpg"
import styles from "./index.css"

const Hero = () => (
  <hero
    style={{ backgroundImage: `url("${heroImage}")`}}
    className={ styles.container }
  >
    <div className={ styles.content }>
      <h1 className={ styles.heading }>
        Kontrolujemy<br />dźwięk
      </h1>
      <p className={ styles.body }>
        Jesteśmy dystrybutorem wysokiej jakości sprzętu do precyzyjnych
        pomiarów akustycznych. Bazując na wieloletnim doświadczeniu naszych
        partnerów oraz własnym, oferujemy sprzęt spełniający światowe
        standardy technologiczne oraz jakościowe!
      </p>
      <Link to="about" className={ styles.button }>
        <Button color="red">Więcej o firmie</Button>
      </Link>
    </div>
  </hero>
)

export default Hero
