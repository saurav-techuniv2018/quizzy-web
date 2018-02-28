import React from 'react';
import { PropTypes } from 'prop-types';

import * as styles from './title-bar.style';

const TitleBar = props => (
  <div style={styles.container}>
    <div>{props.brand}</div>
    <div style={styles.message}>{props.message}</div>
  </div>
);

TitleBar.propTypes = {
  brand: PropTypes.string.isRequired,
  message: PropTypes.string,
};

TitleBar.defaultProps = {
  message: '',
};

export default TitleBar;
