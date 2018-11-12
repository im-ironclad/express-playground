import React, { Component } from 'react'

// Import components
import LoginForm from '../../components/forms/LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        email_address: '',
        password: ''
      }
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
      formDescription: 'Use this form to login to our application',
      submitText: 'Login'
    }
  }

  handleFormInputChange = (e) => {
    const groupName = e.target.name;
    const inputValue = e.target.value;

    console.log('GroupName: ', groupName);
    console.log('InputValue: ', inputValue);

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
    /**
     * For testing lets hit some api endpoints and see what/if we get back
     */
    fetch('/api/login', {
      method: 'POST'
    }).then(res => console.log(res.json()))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="page__login">  
        <LoginForm formGroups={this.formGroups} formValues={this.state.formValues} formProps={this.formProps} handleSubmit={this.onLoginFormSubmit} handleInputChange={this.handleFormInputChange} />
      </section>
    )
  }
}
