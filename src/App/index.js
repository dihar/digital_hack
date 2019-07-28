import React, { Fragment } from 'react';
import { GlobalStyle } from './global-styles';
import Main from '../containers/Main';
import Description from '../containers/Description';
import Survey from '../containers/Survey';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
      <Description />
      <Survey />
    </Fragment>
  );
}

export default App;
