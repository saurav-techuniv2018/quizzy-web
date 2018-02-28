import React from 'react';
import { PropTypes } from 'prop-types';

const TitleBar = props => (
  <div>
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
