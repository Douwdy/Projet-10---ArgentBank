import React from 'react';
import { Provider } from 'react-redux';
import RouterConfig from './RouterConfig';
import store from './store';
import './components/main.scss'; // Importing the main.scss file


function App() {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
}

export default App;