import React from 'react';

const Categories = ({ data: cats }) => {
  return (
    <div className="categories-container">
      {cats.map((category, i) => {
        return (
          <button key={i} type="button" className="btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
