import React from "react"

import Page from "../Page"
import Hero from "../../components/Hero"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <Hero { ...props } />
    </Page>
  )
}

export default Homepage
