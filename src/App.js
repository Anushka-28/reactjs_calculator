import React, { useState } from 'react';
import './App.css';

const App = () => {

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={clear} id="clear" className="highlight">AC</button>
          <button onClick={handleClick} name="/" className="highlight">&divide;</button>
          <button onClick={handleClick} name="*" className="highlight">&times;</button>
          <button onClick={backspace} id="backspace" className="highlight">C</button>
          
          <button onClick={handleClick} name="7">7</button>
          <button onClick={handleClick} name="8">8</button>
          <button onClick={handleClick} name="9">9</button>
          <button onClick={handleClick} name="+" className="highlight">+</button>
          
          <button onClick={handleClick} name="4">4</button>
          <button onClick={handleClick} name="5">5</button>
          <button onClick={handleClick} name="6">6</button>
          <button onClick={handleClick} name="-" className="highlight">&ndash;</button>

          <button onClick={handleClick} name="1">1</button>
          <button onClick={handleClick} name="2">2</button>
          <button onClick={handleClick} name="3">3</button>
          <button onClick={handleClick} name="%">%</button>
          <button onClick={handleClick} name="0">0</button>
          <button onClick={handleClick} name=".">.</button>
          <button onClick={calculate} id="result" className="highlight-more">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
