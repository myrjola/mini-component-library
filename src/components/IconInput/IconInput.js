import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: ${props => props.$width}px;
  align-items: center;
  padding-bottom: var(--padding-bottom);
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size);

  &:focus-within {
    outline: 2px solid #4374CB;
    outline-offset: 4px;
    border-radius: 2px;
  }
`

const Input = styled.input`
  all: unset;
  
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-left: var(--padding-left);
  color: ${COLORS.gray700};
  
  &::placeholder {
    color: ${COLORS.gray500}
  }
  
  &:hover {
    color: ${COLORS.black};
  }
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: var(--border-width) solid ${COLORS.black};
  border-radius: var(--border-width);
`

const styles = {
    small: {
        '--border-width': '0.5px',
        '--padding-bottom': '4px',
        '--padding-left': '24px',
        '--font-size': `${14 / 16}rem`
    },
    large: {
        '--border-width': '1px',
        '--padding-bottom': '8px',
        '--padding-left': '36px',
        '--font-size': `${18 / 16}rem`
    }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper $width={width} style={styles[size]}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} />
      <Icon id={icon} size={size === 'large' ? 24 : 16} />
      <BottomBar />
  </Wrapper>;
};

export default IconInput;
