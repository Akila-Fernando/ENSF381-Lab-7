import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function Square() {
  return <button className="square">{value}</button>;
  }

  export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    return (
    <>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    </>
    );
    }



