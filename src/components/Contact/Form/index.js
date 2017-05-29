import React, { PropTypes } from "react"
import Alert from 'react-s-alert';

import Button from '../../Button'

import styles from './index.css'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { disabled: false }
  }

  handleSuccess = () => {
    const { name, subject, email, message } = this.form.elements;

    name.value = "";
    subject.value = "";
    email.value = "";
    message.value = "";

    this.setState({ disabled: false });
    Alert.success("Twoja wiadomość została wysłana!");
  }

  handleError = () => {
    this.form.submit(); // try classic submit
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.disabled) return;

    const form = event.target;
    const inputs = form.elements;

    if (!this.validate(inputs)) return;
    this.setState({ disabled: true });

    const data = new FormData();

    data.append("_gotcha", inputs["_gotcha"].value);
    data.append("name", inputs["name"].value);
    data.append("subject", inputs["subject"].value);
    data.append("email", inputs["email"].value);
    data.append("message", inputs["message"].value);

    fetch(form.getAttribute("action"),{
      method: "POST",
      headers: { "Accept": "application/json" },
      body: data,
    })
    .then(response => response.json())
    .then(this.handleSuccess)
    .catch(this.handleError);
  }

  validate = (inputs) => {
    let isValid = true;

    if (!inputs["message"].value || !inputs["email"].value) {
      Alert.error("Uzupełnij wymagane pola.");
      isValid = false;
    }

    return isValid;
  }

  render() {
    const { disabled } = this.state;

    return (
      <form
        action={ `http://formspree.io/${this.props.to}` }
        method="POST"
        className={ styles.form }
        onSubmit={ this.handleSubmit }
        ref={ (c) => { this.form = c } }
      >
        <div className={ styles.left }>
          <input type="text" name="_gotcha" style={ { display: "none" } } />
          <label htmlFor="email">
            Adres e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            disabled={ disabled }
          />
          <label htmlFor="name">
            Imię i nazwisko
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            disabled={ disabled }
          />
          <label htmlFor="subject">
            Temat
          </label>
          <input
            type="text"
            id="subject"
            name="_subject"
            autoComplete="off"
            disabled={ disabled }
          />
        </div>
        <div className={ styles.right }>
          <label htmlFor="message">
            Treść wiadomości
          </label>
          <textarea
            id="message"
            name="message"
            className={ styles.message }
            autoComplete="off"
            disabled={ disabled }
          />
          <button
            type="submit"
            className={ styles.submit }
            disabled={ disabled }
          >
            <Button disabled={ disabled }>
              Wyślij
            </Button>
          </button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  to: PropTypes.string.isRequired,
}

export default Form
