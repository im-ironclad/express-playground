import React from 'react';

export default function FormGroup(props) {
  return (
    <div className="form__group">
      <label htmlFor={props.groupName} className="form__group__label">
        {props.groupLabelText}
      </label>

      <div className="form__group__input-cont">
        <input
          type={props.inputType}
          id={props.groupName}
          name={props.groupName}
          value={props.value}
          className="form__group__input-cont__input"
          onChange={props.handleInputChange} />

        {
          props.errors[props.groupName] &&
            <p className="form__group__input-cont__error">
              {props.errors[props.groupName]}
            </p>
        }
      </div>
    </div>
  )
}
