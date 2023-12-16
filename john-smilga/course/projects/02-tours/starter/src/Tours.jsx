import React from 'react';
import { Tour } from './Tour';

export const Tours = ({ tours, removeTour }) => {
  return (
    <main>
      <h1 className="title">Our Tours</h1>
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} removeTour={removeTour} />;
      })}
    </main>
  );
};
