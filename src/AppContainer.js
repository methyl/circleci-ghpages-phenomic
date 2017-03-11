import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import Alert from 'react-s-alert';

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Alert
      position="top-right"
      effect="slide"
      offset={ 120 }
      stack
    />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
