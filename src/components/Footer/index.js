import React from "react"

import { Content as Contact } from "../../layouts/Contact"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <div className={ styles.contact }>
      <h1>Kontakt</h1>
      <Contact />
    </div>
    <div className={ styles.content }>
      <div className={ styles.copyright }>
        © 2017
      </div>
    </div>
  </footer>
)

export default Footer
