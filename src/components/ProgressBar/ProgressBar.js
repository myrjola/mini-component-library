/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const Wrapper = styled.div`
  min-width: 200px;
  box-shadow: inset 0 2px 4px rgba(128, 128, 128, 0.35);
  background-color: ${COLORS.transparentGray15};
`

const Bar = styled.div`
  height: var(--height);
`

const maxProgress = 100

const sizes = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--height": "16px",
  }
}

const ProgressBar = ({ value, size }) => {
  const progress = `Progressed ${value} of ${maxProgress}.`
  return <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuetext={progress} aria-valuemax={maxProgress} >
    <Bar style={sizes[size]} />
  </Wrapper>
};

export default ProgressBar;
