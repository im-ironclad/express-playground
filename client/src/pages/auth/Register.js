import React, { Component } from 'react'
import axios from 'axios';

// Import components
import Form from '../../components/forms/Form';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        name: '',
        email_address: '',
        password: '',
        password_confirm: ''
      },
      formErrors: {}
    }
    this.formGroups = [
      {
        type: 'text',
        groupName: 'name',
        groupLabelText: 'Full Name:',
      },
      {
        type: 'text',
        groupName: 'email_address',
        groupLabelText: 'Email Address:',
      },
      {
        type: 'password',
        groupName: 'password',
        groupLabelText: 'Password:',
      },
      {
        type: 'password',
        groupName: 'password_confirm',
        groupLabelText: 'Confirm Password:',
      }
    ]
    this.formProps = {
      formDescription: 'Register a new account',
      submitText: 'Register'
    }
  }

  // TODO: Abstract to utility function to use everywhere as needed
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

  onRegisterFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    // Client validation before posting to api, if errors set them in state
    // TODO: Abstract validation to utility utilizing Validator NPM package
    if (this.state.formValues.name === '') {
      errors.name = "A name must be entered";
    }
    if (this.state.formValues.email_address === '') {
      errors.email_address = "An email address must be entered";
    }
    if (this.state.formValues.password === '') {
      errors.password = "A password must be entered";
    }
    if (this.state.formValues.password_confirm === '') {
      errors.password_confirm = "You must confirm your password";
    }
    // If no errors then post to api
    if (Object.keys(errors).length) {
      return this.setState({
        formErrors: errors
      });
    }

    let data = {
      name: this.state.formValues.name,
      email_address: this.state.formValues.email_address,
      password: this.state.formValues.password,
      password_confirm: this.state.formValues.password_confirm
    }
    axios.post('api/register', data)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="page__register">  
        <Form
          formGroups={this.formGroups}
          formValues={this.state.formValues}
          formProps={this.formProps}
          handleSubmit={this.onRegisterFormSubmit}
          handleInputChange={this.handleFormInputChange}
          errors={this.state.formErrors} />
      </section>
    )
  }
}
