import React from "react"
import { Link } from "phenomic";

import styles from "./index.css"

const GlobalNav = () => (
  <div className={ styles.container }>
    <div className={ styles.logo }></div>
    <div className={ styles.menu }>
      <ul>
        <li>
          <Link to="about">O firmie</Link>
        </li>
        <li>
          <Link to="products">Oferta</Link>
        </li>
        <li>
          <Link to="news">Aktualności</Link>
        </li>
        <li>
          <Link to="contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default GlobalNav;
