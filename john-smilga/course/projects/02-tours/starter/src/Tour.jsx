import React from 'react';

export const Tour = ({ id, image, info, price, name, removeTour }) => {
  return (
    <div>
      <img className="img" src={image} alt={name} />
      <h2>{name}</h2>
      <p>{info}</p>
      <button className="btn delete-btn" onClick={() => removeTour(id)}>
        not interested
      </button>
    </div>
  );
};
