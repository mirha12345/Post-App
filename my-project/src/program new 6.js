

import React, { useState } from 'react';

const Checker=() =>{
  const [inputValue, setInputValue] = useState('6','8','7','4');
  const [result, setResult] = useState('');

  const Sort  = () => {
    let result='';
    
    for(let i=0;i<inputValue.length;i++) {
        for(let j=i+1; j<inputValue.length; j++){
        if(inputValue[i]>inputValue[j]){
            let temp=inputValue[i]
            inputValue[i]=inputValue[j]
            inputValue[j]=temp
        }
        setInputValue(result)
    }
    setResult(result)
    }
  }
  return (
    <div>
      <h2>Sort value</h2>
      <label htmlFor="inputString">Enter a string:</label>
      <input
        type="text"
      
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={Sort}>Check</button>
      <p>{result}</p>
    </div>
  );
}





export default  Checker;