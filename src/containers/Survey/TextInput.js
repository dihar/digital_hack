import React, { useCallback } from 'react';
import {
  TextInputStyled
} from './styles';

const TextInput = ({ onChange, ...rest }) => {
  const changeHandle = useCallback((event) => {
    onChange(event, {
      value: event.target.value
    });
  }, [onChange]);
  return (
    <TextInputStyled
      onChange={changeHandle}
      {...rest}
    />
  );
};

export default TextInput;
