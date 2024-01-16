import React, { useState } from 'react';

const SortingComponent = () => {
  const originalArray = [34, 5, 2, 45, 65, 232, 1, 343, 0, -2, -34, 8, 17, 1, 2];
  const [sortedArray] = useState([...originalArray].sort((a, b) => a - b));

  return (
    <div>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>SortedArray: {sortedArray.join(', ')}</p>
    </div>
  );
};

export default SortingComponent;
