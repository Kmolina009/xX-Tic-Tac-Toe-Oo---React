import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function Square({ value }){
   
  function [marking, setMarking] = useState(null);
  function handleClick(){
    return console.log("I've been clicked")
  }
  return <button className='square' onClick={handleClick}>{ value }</button>
}

function Board(){
  return (
  <div>
    <div>  
      <Square value="1" />  
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
      <header className="App-header">
        xX Tic Tac Toe Oo
      </header>
      <Board />
    </div>
  );
}

export default App;
