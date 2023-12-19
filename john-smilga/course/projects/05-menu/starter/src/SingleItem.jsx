import React from 'react';

const SingleItem = ({ desc, img, price, title }) => {
  return (
    <div className="single-item">
      <img src={img} alt={title} />
      <header className="title-price">
        <h4>{title}</h4>
        <h5>{price}</h5>
      </header>
      <p className="item-desc">{desc}</p>
    </div>
  );
};

export default SingleItem;
