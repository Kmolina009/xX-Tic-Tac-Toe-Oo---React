import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function Square({ value }){
   
  const [marking, setMarking] = useState(null);
  function handleClick(){
    setMarking('X');
  }
  return <button className='square' onClick={handleClick}>{ marking }</button>
}

function Board(){
  return (
  <div className='board'>
    <div className='board-row'>  
      <Square />  
      <Square />    
      <Square />    
    </div>
    <div className='board-row'>  
      <Square />    
      <Square />    
      <Square />    
    </div>
    <div className='board-row'>  
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
