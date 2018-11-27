import React, { Component } from 'react'

/**
 * Import needed components
 */
import FormGroup from './FormGroup';

export default function Form(props) {
  const resultClassName = `form__result form--${props.formResult.status}`;

  return (
    <div className="form-cont">
      { props.formResult.message && 
        <p className={resultClassName}>
          { props.formResult.message }
        </p>
      }

      <form action="" className="form" onSubmit={props.handleSubmit}>
        {
          props.formGroups.map((group, i) => 
            <FormGroup
              key={i}
              inputType={group.type}
              groupName={group.groupName}
              groupLabelText={group.groupLabelText}
              value={props.formValues[group.groupName]}
              handleInputChange={props.handleInputChange}
              errors={props.errors} />
          )
        }

        <div className="form__submit">
          <button className="form__submit__btn">
            { props.formProps.submitText }
          </button>
        </div>
      </form>
    </div>
  )
}
