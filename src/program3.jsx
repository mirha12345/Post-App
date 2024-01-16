import React, { useState } from 'react';

const Remove = () => {
  
  const [myList, setMyList] = useState([34, 5, 2, 45, 65, 232, 1, 343, 0, -2, -34, 8, 17, 1, 2]);
  const elementsToRemove = [-2, -34,1,5]
  const handleRemoveElements = () => {
    const updatedList = myList.filter(element => !elementsToRemove.includes(element));
    setMyList(updatedList);
  };


  return (
    <div>
      <h1>Remove</h1>
      <ul>
        {myList.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <button onClick={handleRemoveElements}>Remove Elements</button>
    </div>
  );
};

export default Remove;
