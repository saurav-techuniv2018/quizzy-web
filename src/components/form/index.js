import React from 'react';

import * as styles from './form.style';

const Form = props => (
  <div style={styles.container}>
    <div>{props.header}</div>
    <div style={styles.loginSection}>
      <div style={styles.label}>{props.label}</div>
      <input
        style={styles.userName}
        value={props.userName}
        onChange={e => props.onUserNameChanged(e.target.value)}
      />
      <button
        style={styles.loginButton}
        onClick={args => props.onSubmit(args)}
      >{props.submitLabel}
      </button>
    </div>
  </div>
);

export default Form;
