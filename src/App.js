import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles/styles';
import Routes from './routes';

import {Provider} from 'react-redux';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

store.subscribe(App)

export default App;
