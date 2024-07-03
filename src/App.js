import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
      {/* State being passed into Child Components through props*/}
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
