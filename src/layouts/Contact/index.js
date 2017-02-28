import React from "react"

import ContactForm from '../../components/ContactForm'

import Page from "../Page"

import mapImage from "./assets/contact-map.png"
import styles from './index.css'

export const Content = () => (
  <div className={ styles.container }>
    <div className={ styles.address }>
      <h4>Weles Acoustics Sp. z o.o.</h4>
      <address>
        ul. Platanowa 72<br />
        44-217 Rybnik<br />
        e-mail: <a href="mailto:mk@weles-acoustics.com">mk@weles-acoustics.com</a><br />
        tel. <a href="tel:+48882832192">+48 882 832 192</a>
      </address>
      <a
        title="Pokaż na dużej mapie"
        href="https://www.openstreetmap.org/way/454552474"
        target="_blank"
        rel="nofollow noreferrer"
        style={{ backgroundImage: `url(${mapImage})`}}
        className={ styles.map }
      />
    </div>
    <div className={ styles.form }>
      <h2>Napisz do nas</h2>
      <ContactForm to={"barfek@gmail.com"} />
    </div>
  </div>
)

const Contact = (props) => (
  <Page { ...props }>
    <div className={ styles.content }>
      <Content />
    </div>
  </Page>
)

export default Contact
