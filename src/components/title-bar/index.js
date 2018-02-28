import React from 'react';
import { PropTypes } from 'prop-types';

import * as styles from './title-bar.style';

const TitleBar = props => (
  <div style={styles.titleBar}>
    <div>{props.brand}</div>
    <div>{props.message}</div>
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
