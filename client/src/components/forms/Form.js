import React, { Component } from 'react'

/**
 * Import needed components
 */
import FormGroup from './FormGroup';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultMessage: null
    }
  }

  render() {
    return (
      <div className="form-cont">
        <h3 className="form__description">
          { this.props.formProps.formDescription }
        </h3>

        <form action="" className="form" onSubmit={this.props.handleSubmit}>
          {
            this.props.formGroups.map((group, i) => 
              <FormGroup
                key={i}
                inputType={group.type}
                groupName={group.groupName}
                groupLabelText={group.groupLabelText}
                value={this.props.formValues[group.groupName]}
                handleInputChange={this.props.handleInputChange}
                errors={this.props.errors} />
            )
          }

          <div className="form__submit">
            <button className="form__submit__btn">
              { this.props.formProps.submitText }
            </button>
          </div>
        </form>
      </div>
    )
  }
}
