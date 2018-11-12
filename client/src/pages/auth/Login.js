import React, { Component } from 'react'
import axios from 'axios';

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
    let data = {
      email_adress: this.state.formValues.email_address,
      password: this.state.formValues.password
    }
    // fetch('/api/login', {
    //   method: 'POST'
    // }).then(res => res.json())
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err));
    axios.post('/api/login', data)
      .then(response => console.log(response))
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
