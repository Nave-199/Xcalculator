import React, { useState } from "react";

const Calculator = () => {
  const [fullInput,setFullInput] = useState('');
  const [answer,setAnswer] = useState('');

 const handleInput = (value) => {
      setFullInput(prev => prev+value)
 }

 const handleClear = () => {
      setFullInput('');
      setAnswer('');
 }

 const handleEquation = () => {
      if(fullInput===''){
          setAnswer('Error');
      } else{
          try{
              // eslint-disable-next-line no-eval
              setAnswer(eval(fullInput));
          } catch(err){
              setAnswer('Error');
          }
      }   
 }

  return ( 
      <div className="calculator">
          <h1>React Calculator</h1>
          <input type="text" value={fullInput} readOnly/>
          <div>{answer}</div>
          <div className="btns-group">
              <button className="btn" onClick={()=>handleInput('7')}>7</button>
              <button className="btn" onClick={()=>handleInput('8')}>8</button>
              <button className="btn" onClick={()=>handleInput('9')}>9</button>
              <button className="btn" onClick={()=>handleInput('+')}>+</button>
              <button className="btn" onClick={()=>handleInput('4')}>4</button>
              <button className="btn" onClick={()=>handleInput('5')}>5</button>
              <button className="btn" onClick={()=>handleInput('6')}>6</button>
              <button className="btn" onClick={()=>handleInput('-')}>-</button>
              <button className="btn" onClick={()=>handleInput('1')}>1</button>
              <button className="btn" onClick={()=>handleInput('2')}>2</button>
              <button className="btn" onClick={()=>handleInput('3')}>3</button>
              <button className="btn" onClick={()=>handleInput('*')}>*</button>
              <button className="btn" onClick={handleClear}>C</button>
              <button className="btn" onClick={()=>handleInput('0')}>0</button>
              <button className="btn" onClick={handleEquation}>=</button>
              <button className="btn" onClick={()=>handleInput('/')}>/</button>
          </div>
      </div>
  );
};

export default Calculator;
