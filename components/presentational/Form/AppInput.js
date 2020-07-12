import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components';
import { color } from '@/utils/color';

const AppInput = (props) => {
  const handleChange = ({ target }) => {
    props.setValue(target.value)
  };
  const theme = useSelector(state => state.theme, shallowEqual);
  const input = {
    color: `${color[theme]['panelText']}`,
    background: `${color[theme]['panel']}`
  }

  return (
    <Input
      key={props.name}
      id={props.name}
      name={props.name}
      type='text'
      value={props.value}
      placeholder={props.placeholder}
      onChange={e => handleChange(e)}
      style={input}
    />
  );
};

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: ${({ isError }) => isError ? 'solid 2px #df0200' : `solid 1px ${color['nomal']['glay1']}`};
  border-radius: 4px;
`

export default AppInput;