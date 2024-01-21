import { useState } from "react";

const StringReverse = () => {
  const [inputString, setInputString] = useState('');
  const [output, setOutput] = useState('');
    const StringReverser = () => {
      let list='';  
      let result = '';
      for (let i = inputString.length-1 ; i >= 0; i--) {
        list = inputString[i];
        for (let i = 0; i < list.length; i++) {
          let char = list[i];
          if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
          } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
          } else {
            result += char;
          }
          setOutput(list);
      }
      setOutput(result);
  }
 
  

}
 return (  
        <>
        <h1>Click the button and reverse the list and change the case</h1>
        <input type="text" value={inputString} onChange={(e)=>setInputString(e.target.value)}></input>
        <button type="submit" onClick={StringReverser}> Click me</button>
        <h2>{output}</h2>
        </>
        
    );
}
 
export default StringReverse;