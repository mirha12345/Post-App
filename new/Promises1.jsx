import React, { useState } from 'react';

const PromisesComponent = () => {
  const [promiseResult, setPromiseResult] = useState(null);

  const fetchData = () => {
    // Simulate an asynchronous operation with a Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful data fetching
        resolve("Data successfully fetched!");
        // Simulate an error
        // reject("Error occurred while fetching data!");
      }, 2000);
    });
  };

  const handleButtonClick = () => {
    fetchData()
      .then(result => {
        // Handle successful promise resolution
        setPromiseResult(result);
      })
      .catch(error => {
        // Handle promise rejection
        setPromiseResult(`Error: ${error}`);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>
      <div>
        {promiseResult !== null ? (
          <p>{promiseResult}</p>
        ) : (
          <p>Click the button to fetch data</p>
        )}
      </div>
    </div>
  );
};

export default PromisesComponent;