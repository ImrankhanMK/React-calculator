import React, { useEffect, useState } from "react";

export default function Main() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["+", "-", "*", "/", "."];
//-----------------------------------------------------
  const updateCalc = (value) => {

    if(
        ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
    ){return ;}
    setCalc(calc+value);

    if(!ops.includes(value)){
        setResult(eval(calc+value).toString()); 
    }
  };
  //----------------------------------------------------
  const calculate = ( ) => {
    setCalc(eval(calc).toString());
    setResult(eval(calc).toString());
  }
  //----------------------------------------------------
  const del = () => {
    if (calc == ''){
        return ;
    }
    const value = calc.slice (0,-1);
    setCalc(value);
  }
  

  const createDigits = () => { 
    const digits = [9, 8 , 7, 6, 5, 4, 3, 2,  1];
    return digits.map(value =>  <button onClick={() => updateCalc(value.toString())} key={value}>{value}</button>);
  };

  return (
    <div className="main">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span>:""}&nbsp;{calc || 0}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={del}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={calculate}>=</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
        </div>
      </div>
    </div>
  );
}




