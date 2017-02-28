import React from "react"

import Page from "../Page"
import { Content as Contact } from "../Contact"
import Section from "../../components/Section"
import Hero from "../../components/Hero"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <Hero />
      <Section heading="Kontakt">
        <Contact />
      </Section>
    </Page>
  )
}

export default Homepage
