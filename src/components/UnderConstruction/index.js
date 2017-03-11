import React from "react"

import image from './under-construction.png';
import styles from './index.css'

const UnderConstruction = () => (
  <div className={ styles.container }>
    <img src={ image } className={ styles.image }/>
    <h1>Strona w budowie.</h1>
    <h2>Zapraszamy już wkrótce!</h2>
  </div>
)

export default UnderConstruction
