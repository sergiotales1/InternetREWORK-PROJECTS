import React from 'react';
import './SearchResult.css';

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => {
        document.querySelector('input').value = result.name;
        document.querySelector('input').focus();
      }}
    >
      {result.name}
    </div>
  );
};
