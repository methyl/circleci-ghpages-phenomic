import React, { PropTypes } from "react"

import Body from "../../components/Body"
import Section from "../../components/Section"
import Page from "../Page"

import bodyBgImage from "./assets/body-bg.jpg"
import styles from './index.css'

const About = (props) => (
  <Page { ...props }>
    <Section>
      <div
        style={{ backgroundImage: `url(${ bodyBgImage })`}}
        className={ styles.body }
      >
        <h1>{ props.head.title }</h1>
        <Body { ...props} />
      </div>
    </Section>
  </Page>
)

About.propTypes = {
  head: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
}

export default About
