import React from "react"

import Page from "../Page"
import UnderConstruction from "../../components/UnderConstruction"

const News = (props) => {
  return (
    <Page { ...props }>
      <UnderConstruction />
    </Page>
  )
}

export default News
