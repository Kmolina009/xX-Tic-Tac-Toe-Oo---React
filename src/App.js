import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function Square(){
  return <button className='square'>1</button>
}

function Board(){
  return (
  <div>
    <div>  
      <Square />    
      <Square />    
      <Square />    
    </div>
    <div>  
      <Square />    
      <Square />    
      <Square />    
    </div>
    <div>  
      <Square />    
      <Square />    
      <Square />    
    </div>
  </div>
  )
}
function App() {
  return (
    <div className="App">
      <Board />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
