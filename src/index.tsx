import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Example from './components/Example';

import './style';

const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
      <Example />
   </Provider>, 
   document.getElementById('root')
);