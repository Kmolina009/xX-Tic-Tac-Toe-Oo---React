import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function Square(){
  return <button className='square'>X</button>
}
function App() {
  return (
    <div className="App">
      <Square />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
