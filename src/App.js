import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//To check for a winnerm the Board would eed to somehow know the state of each of the 9 Square Component 
// One could have the board ask each Square component for it's cuirrent State. - this is not recommented(convoluted, prone to bugs)
//Instead the Board can tell each square what data it should display given a current State - You want the Parent component to store state


// To collect data fron multiple children, or have two child components communicate with each other, declare the shared state in 
// their parent component instead. The parent component can pass that state back down to the children via props. This keeps the 
// child components in sync with each other and with their parents. 

//Lifting state into a parent component is commen when React Components are being refactored.

function Square({ value }){
   
  const [marking, setMarking] = useState(null);
  function handleClick(){
    setMarking('X');
  }
  return <button className='square' onClick={handleClick}>{ marking }</button>
}

function Board(){
  // Hook that determines state of Child Components
  const [squares, setSquares] = useState(Array(9).fill(null))
  return (
  <div className='board'>
    <div className='board-row'>  
      {/* State being passed into Child Components */}
      <Square marking={squares[0]}/>  
      <Square marking={squares[1]}/>    
      <Square marking={squares[2]}/>    
    </div>
    <div className='board-row'>  
      <Square marking={squares[3]}/>  
      <Square marking={squares[4]}/>    
      <Square marking={squares[5]}/>    
    </div>
    <div className='board-row'>  
      <Square marking={squares[6]}/>  
      <Square marking={squares[7]}/>    
      <Square marking={squares[8]}/>    
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
