import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

import styles from "./index.css"

const Page = ({ __url, head, children }, { metadata: { pkg } }) => {
  const metaTitle = head.metaTitle ? head.metaTitle : head.title
  const meta = [
    { property: "og:type", content: "website" },
    { property: "og:title", content: `${metaTitle} ~ ${pkg.company}`},
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: `${pkg.homepage}/assets/og-image.jpg` },
    { property: "og:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet title={ `${metaTitle} ~ ${pkg.company}` } meta={ meta } />
      <div className={ styles.wrapper }>
        { children }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
