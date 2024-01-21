
import React, { useState } from 'react';

function PalindromeChecker() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const isPalindrome = () => {
    let string='';
  for (let i =inputValue.length-1; i>=0; i--) {
    string+=inputValue[i];
    if (inputValue===string) {
      setResult("true")
    } else {
      setResult("false")
    }
    
  }  

}

  return (
    <div>
      <h2>Palindrome Checker</h2>
      <label htmlFor="inputString">Enter a string:</label>
      <input
        type="text"
      
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={isPalindrome}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default PalindromeChecker;