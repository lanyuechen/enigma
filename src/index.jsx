import React from 'react';
import ReactDOM from 'react-dom';

import Page from '@/pages';

import './global.less';

const App = () => {
  return (
    <Page />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
