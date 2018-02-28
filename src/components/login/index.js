import React from 'react';
import { PropTypes } from 'prop-types';

import TitleBar from '../title-bar';
import Form from '../form';
import Welcome from '../welcome';

const Login = props => (
  <div>
    <TitleBar
      brand="Quizzy"
    />

    <Welcome message="Quizzy!" />

    <Form
      header="Login"
      label="Username"
      userName={props.userName}
      onUserNameChanged={e => props.onUserNameChanged(e)}
      onSubmit={args => props.onSubmit(args)}
      submitLabel="Login"
    />
  </div>
);

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  onUserNameChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
