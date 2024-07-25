import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (result && value !== "C" && value !== "=") {
      setInput(value);
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleofEvaluate = () => {
    try {
      if (input.trim() === "") {
        setResult("Error");
      } else {
        const evaluatedResult = eval(input);
        if (evaluatedResult === Infinity) {
          setResult("Infinity");
        } else if (isNaN(evaluatedResult)) {
          setResult("NaN");
        } else {
          setResult(evaluatedResult);
        }
      }
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" value={result || input} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleofEvaluate()}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
