import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Menu = ({ tree }) => (
  <div className={styles.container}>
    <div className={styles.list}>
      {tree.map(category => (
        <Link
          to={category.__url}
          className={styles.item}
          activeClassName={styles.itemActive}
          key={category.title}
        >
          {category.title}
        </Link>
      ))}
      {/* {category.subcategories &&
        <ul className={styles.subcategory}>
          {category.subcategories.map(subcategory => (
            <li key={subcategory.title} className={styles.item}>
              <Link to={subcategory.__url}>{subcategory.title}</Link>
            </li>
          ))}
        </ul>
      } */}
    </div>
  </div>
)

Menu.propTypes = {
  tree: PropTypes.array.isRequired,
}

export default Menu
