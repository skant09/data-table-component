import React from 'react';
import { Provider } from 'react-redux'
import Table from './table';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Datatable</header>
      <Table />
    </div>
  );
}

export default App;
