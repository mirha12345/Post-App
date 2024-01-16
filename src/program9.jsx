import React from "react";
const SpreadMethod2 = () => {

const arr=[34,5,2,45,65,232,1,343,0,-2,-34,8,17,1,2]
const arr2=[1,2,3,4,5]

const result =[...arr,...arr2]

return (
    <div>
      <h1>Method</h1>
      <h2>{result.join(', ')}</h2>
    </div>
  );
};

export default SpreadMethod2;
