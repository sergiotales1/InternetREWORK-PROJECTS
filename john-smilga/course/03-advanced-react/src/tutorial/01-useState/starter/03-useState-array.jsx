import { data } from '../../../data.js';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  function removeItem(id) {
    setPeople(people.filter((person) => person.id !== id));
  }
  function clearItems() {
    setPeople([]);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button type="button" onClick={() => removeItem(id)}>
              remove item
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        type="button"
        onClick={clearItems}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
