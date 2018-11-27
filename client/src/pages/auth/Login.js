import React, { Component } from 'react'
import axios from 'axios';

// Import needed utilities
import validateLoginInput from '../../../../validation/auth/login';

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
      formErrors: {},
      formResult: {}
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
    const data = {
      email_address: this.state.formValues.email_address,
      password: this.state.formValues.password
    }
    // Validate the input fields
    const { errors, isValid } = validateLoginInput(data);
    // If errors, return set state with errors
    if (!isValid) return this.setState({ formErrors: errors });

    // If there weren't any errors, do yo thang
    axios.post('api/login', data)
      .then(response => {
        const { token } = response.data;
        // Set token and add to localStorage
        window.localStorage.setItem('jwtToken', token);
        axios.defaults.headers.common['Authorization'] = token;
        // Once done,redirect to user dashboard
        return window.location.href = '/dashboard';
      })
      .catch(err => this.setState({ formErrors: err.response.data }));
  }

  render() {
    return (
      <section className="page__login page-content">  
        <Form
          formGroups={this.formGroups}
          formValues={this.state.formValues}
          formProps={this.formProps}
          formResult={this.state.formResult}
          handleSubmit={this.onLoginFormSubmit}
          handleInputChange={this.handleFormInputChange}
          errors={this.state.formErrors} />
      </section>
    )
  }
}
