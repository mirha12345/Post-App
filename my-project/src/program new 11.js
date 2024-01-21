import React, { useState } from 'react';

const Ites = () => {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [show,setshow] = useState(false)

  const addItem = () => {
    setshow(false)

    if (searchInput !== null && searchInput !== "") {
      setItems([...items, searchInput]);
    } else {
      alert("Please enter a valid item.");
    }
    setSearchInput("")

  };

  const displayItems = () => {
    setshow(true)
  };

  const filterItems = () => {
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredItems.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  };

  return (
    <div>
      <h1>Add and Display Elements</h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => displayItems()}>Display All</button>
      <button onClick={filterItems}>Search</button>

      <ul>
        {show && (
          items.map((item, index) => (
            <li key={index}>Element {index} : {item}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Ites;