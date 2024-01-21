import React, { useState } from 'react';

const Calculator = () => {
  const [shape, setShape] = useState('');
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [radius, setRadius] = useState(0);
  const [result, setResult] = useState(0);

  const calculateArea = () => {
    switch (shape) {
      case 'rectangle':
        setResult(length * width);
        break;
      case 'triangle':
        setResult(0.5 * base * height);
        break;
      case 'circle':
        setResult(3.14 * radius ** 2);
        break
      default:
        setResult(0);
    }
  };

  return (
    <div>
      <h1>Geometry Calculator</h1>

      <label>
        Select a shape:
        <select onChange={(e) => setShape(e.target.value)}>
          <option value="">Select</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
          <option value="circle">Circle</option>
        </select>
      </label>

      {shape && (
        <div>
          {shape === 'rectangle' && (
            <div>
              <label>Length: <input type="number" onChange={(e) => setLength(Number(e.target.value))} /></label>
              <label>Width: <input type="number" onChange={(e) => setWidth(Number(e.target.value))} /></label>
            </div>
          )}

          {shape === 'triangle' && (
            <div>
              <label>Base: <input type="number" onChange={(e) => setBase(Number(e.target.value))} /></label>
              <label>Height: <input type="number" onChange={(e) => setHeight(Number(e.target.value))} /></label>
            </div>
          )}

          {shape === 'circle' && (
            <div>
              <label>Radius: <input type="number" onChange={(e) => setRadius(Number(e.target.value))} /></label>
            </div>
          )}

          <button onClick={calculateArea}>Calculate Area</button>

          {result > 0 && <p>The area is: {result}</p>}
        </div>
      )}
    </div>
  );
};

export default Calculator;

