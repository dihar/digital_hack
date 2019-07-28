import React, { useState } from 'react';
import banksSrc from './resources/bank.jpeg';
import linksSrc from './resources/text.jpeg';
import {
  BanksStyled
} from './styles';

const Banks = () => {
  const [mode, setMode] = useState(0);

  return (
    <BanksStyled>
      {mode === 0 && <img onClick={() => setMode(1)} src={banksSrc} alt='banks'/>}
      {mode === 1 && <img src={linksSrc} alt='banks'/>}
    </BanksStyled>
  );
};

export default Banks;
