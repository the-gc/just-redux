import React from 'react';
import {view as Todos} from './todos';
import {view as Filter} from './filter';
import './App.css';

function App() {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  )
}
export default App;
