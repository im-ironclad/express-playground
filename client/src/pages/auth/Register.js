import React, { Component } from 'react'
import axios from 'axios';

// Import needed utilities
import validateRegisterInput from '../../../../validation/auth/register';

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
      formErrors: {},
      formResult: {}
    }

    // Set non-state variables
    this.formProps = {
      submitText: 'Register'
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
  }

  // TODO: Abstract to utility function to use everywhere as needed, if possible
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
    let data = {
      name: this.state.formValues.name,
      email_address: this.state.formValues.email_address,
      password: this.state.formValues.password,
      password_confirm: this.state.formValues.password_confirm
    }

    // Get our validationObject that holds our errors, if any
    const { errors, isValid } = validateRegisterInput(data);

    // If there are errors, return by setting them in the state
    if (!isValid) {
      return this.setState({
        formErrors: errors
      });
    }

    // If there weren't any errors, do yo thang
    axios.post('api/register', data)
      .then(response => {
        console.log(response);
        // Do something with the response
        // Clear errors and give result of form submission
        // TODO: Test cases against getting a response but no user being created



        
        // TODO: change from updating formResult etc to redirecting to the /home route on success
        return this.setState({
          formErrors: {},
          formResult: {
            status: 'success',
            message: 'Form sent successfully.'
          }
        });
      })
      .catch(err => {
        // TODO: Might need to verify that response comes with data, otherwise just so something with it
        // Test cases against registerController User catch(es)

        return this.setState({
          formResult: {},
          formErrors: {
            ...err.response.data
          }
        });
      });
  }

  render() {
    return (
      <section className="page__register page-content">  
        <Form
          formGroups={this.formGroups}
          formValues={this.state.formValues}
          formProps={this.formProps}
          formResult={this.state.formResult}
          handleSubmit={this.onRegisterFormSubmit}
          handleInputChange={this.handleFormInputChange}
          errors={this.state.formErrors} />
      </section>
    )
  }
}
