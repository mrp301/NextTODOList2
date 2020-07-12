import React, { useState } from 'react'
import styled from 'styled-components';
import AppInput from '@/components/presentational/Form/AppInput';

const AppInputWithLabel = (props) => {
  const [value, setValue] = useState(props.value)
  const [error, setError] = useState(props.isError)

  const handleChange = (value) => {
    checkValue(value);
    setValue(value);
    props.setValue(value);
  }

  const checkValue = (value) => {
    setError(value ? false : true)
  }

  const renderErrorText = () => {
    if (!error) return;

    return (
      <ErrorText>{props.errorText}</ErrorText>
    )
  }

  return (
    <div className={props.className}>
      <Label htmlFor={props.name}>
        {props.label}
      </Label>
      <AppInput
        name={props.name}
        type='text'
        value={value}
        placeholder={props.placeholder}
        isError={error}
        setValue={e => handleChange(e)}
      />
      {renderErrorText()}
    </div>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`

const ErrorText = styled.p`
  margin-top: 4px;
  color: #df0200;
  font-size: 12px;
`

export default AppInputWithLabel;