import React from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import welesSvg from "../icons/weles-logo.svg";

import styles from "./index.css"

const MenuLink = (props) => (
  <Link
    className={ styles.link }
    activeClassName={ styles.isActive }
    { ...props }
  />
)

const Header = () => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.logo }>
        <Link to="/">
          <Svg svg={ welesSvg } cleanup />
        </Link>
      </div>
      <div className={ styles.menu }>
        <MenuLink to="about">O firmie</MenuLink>
        <MenuLink to="products">Oferta</MenuLink>
        <MenuLink to="news">Aktualności</MenuLink>
      </div>
    </nav>
  </header>
)

export default Header
