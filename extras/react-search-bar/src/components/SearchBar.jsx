import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const getData = function (e) {
    e.preventDefault();
    console.log(document.querySelector('input').value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <form onSubmit={getData}>
        <input
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
};
