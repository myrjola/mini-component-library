import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  align-items: center;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black}
  }
  
  &:focus-within {
    outline: 2px solid #4374CB;
  }
`

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-appearance: none;
`

const DisplayedValue = styled.div`
  font-size: 16px;
  margin-right: 20px;
`

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect aria-label={label} value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <DisplayedValue>{displayedValue}</DisplayedValue>
            <Icon id="chevron-down" size={20} strokeWidth={2} />
        </Wrapper>
    );
};

export default Select;
