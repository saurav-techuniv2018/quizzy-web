import React from 'react';

import * as styles from './welcome.style';

const Welcome = props => (
  <div style={styles.container}>
    <div style={styles.welcome}>
      <div>Welcome</div>
      <div>to</div>
    </div>
    <div style={styles.message}>{props.message}</div>
  </div>
);

export default Welcome;
