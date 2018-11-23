import React, { Component } from 'react'
import axios from 'axios';

// Import components
import Form from '../../components/forms/Form';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        email_address: '',
        password: ''
      },
      formErrors: {}
    }
    this.formGroups = [
      {
        type: 'text',
        groupName: 'email_address',
        groupLabelText: 'Email Address:',
      },
      {
        type: 'password',
        groupName: 'password',
        groupLabelText: 'Password:',
      }
    ]
    this.formProps = {
      formDescription: 'Log in to our application',
      submitText: 'Login'
    }
  }

  handleFormInputChange = (e) => {
    const groupName = e.target.name;
    const inputValue = e.target.value;

    this.setState(prevState => ({
      formValues: {
        ...prevState.formValues,
        [groupName]: inputValue
      }
    }));
  }

  onLoginFormSubmit = (e) => {
    e.preventDefault();
    // Do basic client validation before posting to api
    // If errors, load errors
    // If no errors then post to api
    let data = {
      email_address: this.state.formValues.email_address,
      password: this.state.formValues.password
    }
    axios.post('api/login', data)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="page__login">  
        <Form
          formGroups={this.formGroups}
          formValues={this.state.formValues}
          formProps={this.formProps}
          handleSubmit={this.onLoginFormSubmit}
          handleInputChange={this.handleFormInputChange}
          errors={this.state.formErrors} />
      </section>
    )
  }
}
