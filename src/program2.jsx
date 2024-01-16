import React from 'react';

const MyComponent = () => {
  
  const originalArray = [34, 5, 2, 45, 65, 232, 1, 343, 0, -2, -34, 8, 17, 1, 2];
  const elementsToAdd = [100, 200, 300];

  const updatedArray = [...originalArray, ...elementsToAdd];
  console.log(originalArray.pop(3),"rfcrfcxrfc")
  return (
    <div>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Updated Array: {updatedArray.join(', ')}</p>
    </div>
  );
};

export default MyComponent;
