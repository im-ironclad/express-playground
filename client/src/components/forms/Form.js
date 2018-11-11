import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.formGroups);
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        {/* 
          Add form groups as needed
         */}
      </form>
    )
  }
}
