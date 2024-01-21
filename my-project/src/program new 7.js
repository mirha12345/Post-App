import React, { useState } from 'react';
const MinMax = () => {

    const [value, setValue] = useState()
    const [data, setData] = useState([])

    const [maxdata, setMaxdata] = useState()
    const [minData, setMinData] = useState()

    const handleAdd = (value) => {
        data.push(value)
        setValue("")
    }
    const findMinMax = () => {
        let min = data[0];
        let max = data[0];
        for (let i = 1; i < data.length; i++) {
            if (data[i] < min) {
                min = data[i];
            } else if (data[i] > max) {
                max = data[i];
            }
            setData(min,max)
        }
        setMinData(min);
        setMaxdata(max);
    }
    return (
        <div>
                  
            <input type="number" placeholder='Enter Number' value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button className='btn btn-primary m-2' onClick={() => handleAdd(value)}>Add</button>
            
            <h3>  Smallest No: {minData} <br /> Largest No: {maxdata}</h3>
            <button className="btn btn-danger" onClick={findMinMax}>Click to Find</button>

            <hr />
        </div>
    );
}

export default MinMax