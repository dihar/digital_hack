import React, { useCallback } from 'react';
import {
  YesNoContainer,
  YesNoButton
} from './styles';

const YesNo = ({ onChange, ...rest }) => {
  const yesHandle = useCallback((event) => {
    onChange(null, {
      value: 'yes'
    });
  }, [onChange]);
  const noHandle = useCallback((event) => {
    onChange(null, {
      value: 'no'
    });
  }, [onChange]);
  return (
    <YesNoContainer>
      <YesNoButton onClick={yesHandle} isActive={rest.value === 'yes'}>
        Да
      </YesNoButton>
      <YesNoButton onClick={noHandle} isActive={rest.value === 'no'}>
        Нет
      </YesNoButton>
    </YesNoContainer>
  );
};

export default YesNo;
