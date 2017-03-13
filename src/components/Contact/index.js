import React from "react"

import Section from "../Section"

import Form from "./Form"

import locationImage from "./assets/location.png"
import styles from './index.css'

export const Contact = () => (
  <Section heading="Kontakt" className={ styles.section }>
    <div className={ styles.left }>
      <h4>Weles Acoustics Sp. z o.o.</h4>
      <address>
        ul. Platanowa 72<br />
        44-217 Rybnik<br />
        e-mail: <a href="mailto:info@weles-acoustics.com">info@weles-acoustics.com</a><br />
        tel. <a href="tel:+48882832192">+48 882 832 192</a>
      </address>
      <a
        title="Pokaż na dużej mapie"
        href="https://www.openstreetmap.org/way/454552474"
        target="_blank"
        rel="nofollow noreferrer"
        style={{ backgroundImage: `url(${locationImage})`}}
        className={ styles.map }
      />
    </div>
    <div className={ styles.right }>
      <h2>Napisz do nas</h2>
      <Form to={"info@weles-acoustics.com"} />
    </div>
  </Section>
)

export default Contact
