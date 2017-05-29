import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import Alert from 'react-s-alert';

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Alert position="bottom" />
    <Content>
      { props.children }
    </Content>
    {!props.location.pathname.match("products") && <Contact />}
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default AppContainer
