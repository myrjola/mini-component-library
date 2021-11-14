/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const Wrapper = styled.div`
  min-width: 200px;
  box-shadow: inset 0 2px 4px rgba(128, 128, 128, 0.35);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  padding: var(--padding);
  overflow: hidden;
`

const BarWrapper = styled.div`
  height: var(--height);
  border-radius: var(--inner-border-radius);
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${props => props.value}%;
  transition: width 1s ease-in-out;
`

const maxProgress = 100

const sizes = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--border-radius": "8px",
    "--inner-border-radius": "4px",
    "--padding": "4px"
  }
}

const ProgressBar = ({ value, size }) => {
  const progress = `Progressed ${value} of ${maxProgress}.`
  return <Wrapper role="progressbar" style={sizes[size]} aria-valuenow={value} aria-valuemin="0" aria-valuetext={progress} aria-valuemax={maxProgress} >
    <BarWrapper>
      <Bar value={value} />
    </BarWrapper>
  </Wrapper>
};

export default ProgressBar;
