import React from 'react';
import SingleItem from './SingleItem';

const Menu = ({ data }) => {
  console.log(data);
  return (
    <article className="menu-container">
      {data.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </article>
  );
};

export default Menu;
