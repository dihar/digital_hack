import React from 'react';
import banksSrc from './resources/bank.jpeg';
import {
  BanksStyled
} from './styles';

const Banks = () => (
  <BanksStyled><img src={banksSrc} alt='banks'/></BanksStyled>
);

export default Banks;
