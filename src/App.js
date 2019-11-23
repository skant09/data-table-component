import React from 'react';
import { Provider } from 'react-redux'
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Datatable</header>
      </div>
    </Provider>
  );
}

export default App;
