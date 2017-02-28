import React, { PropTypes } from "react"

import Button from '../Button'

import styles from './index.css'

class ContactForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form
        action={` http://formspree.io/${this.props.to}` }
        method="POST"
        className={ styles.form }
        onSubmit={this.handleSubmit}
      >
        <div className={ styles.left }>
          <label htmlFor="name">Imię i nazwisko</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="subject">Temat</label>
          <input type="text" id="subject" name="_subject" />
          <label htmlFor="email">Adres e-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={ styles.right }>
          <label htmlFor="message">Treść wiadomości</label>
          <textarea id="message" name="message" className={ styles.message } />
          <button type="submit" className={ styles.submit }>
            <Button>Wyślij</Button>
          </button>
        </div>
      </form>
    )
  }
}

ContactForm.propTypes = {
  to: PropTypes.string.isRequired,
}

export default ContactForm
