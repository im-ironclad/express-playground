import React, { Component } from 'react'

// Import components
import Form from '../../components/forms/Form';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.formGroups = [
      "email_address", "password"
    ];
  }

  render() {
    return (
      <section className="page__login">  
        <div>
          Login with Pinterest.
        </div>
        <a href="">
          Login
        </a>
      </section>
    )
  }
}
