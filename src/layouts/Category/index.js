import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Products from "../Products"

import Body from "../../components/Body"

import styles from "./index.css"

const Category = (props, { collection }) => {
  const subcategories = collection.filter(s => (
    s.layout === "Subcategory" &&
    s.__url.match(props.__url)
  )).sort((a, b) => a.index - b.index);

  const products = collection.filter(c => (
    c.layout === "Product" &&
    c.__url.match(props.__url)
  )).sort((a, b) => a.index - b.index);

  return (
    <Products {...props}>
      <div className={styles.container}>
        <Body {...props} bodyClassName={styles.intro}/>
        <div className={styles.content}>
          {subcategories.length ?
            subcategories.map(s => (
              <div className={styles.subcategory} key={s.title}>
                <h3
                  id={s.__url.split("/").reverse()[1]}
                  className={styles.title}
                >
                  {s.title}
                </h3>
                <p>{s.description}</p>
                <div className={styles.products}>
                  <div className={styles.heading}>
                    <strong className={styles.product}>Nazwa</strong>
                    <strong className={styles.description}>Opis</strong>
                  </div>
                  <div className={styles.list}>
                    {products
                    .filter(p => p.__url.match(s.__url))
                    .sort((a, b) => a.index - b.index)
                    .map(p => (
                      <Link to={p.__url} className={styles.item} key={p.title}>
                        <div className={styles.product}>
                          {p.title}
                        </div>
                        <div className={styles.description}>
                          {p.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))
            :
            !!products.length && <div className={styles.products}>
              <div className={styles.heading}>
                <strong className={styles.product}>Nazwa</strong>
                <strong className={styles.description}>Opis</strong>
              </div>
              <div className={styles.list}>
                {products.map(p => (
                  <Link to={p.__url} className={styles.item} key={p.title}>
                    <div className={styles.product}>
                      {p.title}
                    </div>
                    <div className={styles.description}>
                      {p.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </Products>
  )
}

Category.propTypes = {
  __url: PropTypes.string
}

Category.contextTypes = {
  collection: PropTypes.array
}

export default Category
