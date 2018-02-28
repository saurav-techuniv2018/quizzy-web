import React from 'react';

const Form = props => (
  <div>
    <div>{props.header}</div>
    <div>{props.label}</div>
    <input
      value={props.userName}
      onChange={e => props.onUserNameChanged(e.target.value)}
    />
    <button onClick={args => props.onSubmit(args)}>{props.submitLabel}</button>
  </div>
);

export default Form;
