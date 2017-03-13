import React from "react"

import Section from '../Section';

import image from './assets/under-construction.png';
import styles from './index.css'

const UnderConstruction = () => (
  <Section>
    <div className={ styles.content }>
      <img src={ image } className={ styles.image }/>
      <h1>Strona w budowie.</h1>
      <h2>Zapraszamy już wkrótce!</h2>
    </div>
  </Section>
)

export default UnderConstruction
