import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import Table from './table';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Datatable</header>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
