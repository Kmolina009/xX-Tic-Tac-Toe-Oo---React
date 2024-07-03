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
//Important Note - State is private to the component that defines it - in this case you cannot update the Board's state from Square

function Square({ value, onSquareClick }){
  return <button className='square' onClick={onSquareClick}>{ value }</button>
}

function Board(){
  // Hook that determines state of Child Components
  const [squares, setSquares] = useState(Array(9).fill(null));
//This is a closure with the Board function
  function handleClick(i){
    console.log("Clicked " + String(i))
    const nextSquares = squares.slice();
    nextSquares[i]="X";
    setSquares(nextSquares);
    console.log(nextSquares)
  }
  return (
  <div className='board'>
    <div className='board-row'>  
      {/* State being passed into Child Components */}
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>  
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>    
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>    
    </div>
    <div className='board-row'>  
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>  
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>    
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>    
    </div>
    <div className='board-row'>  
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>  
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>    
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>    
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
