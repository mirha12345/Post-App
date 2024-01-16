import React, { useState } from 'react';

function Myre() {
  const [myArray, setMyArray] = useState([34,5,2,45,65,232,1,343,0,-2,-34,8,17,1,2]);

  const removeLastElement = () => {

    const newArray = myArray.slice(0, -1)
    setMyArray(newArray);
  };

  return (
    <div>
      <p>Original Array: {myArray.join(', ')}</p>
      <button onClick={removeLastElement}>Remove Last Element</button>
      <p>Updated Array: {myArray.join(', ')}</p>
    </div>
  );
}

export default Myre;
