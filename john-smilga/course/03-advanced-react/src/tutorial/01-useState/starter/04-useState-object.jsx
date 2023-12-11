import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Play video-games',
  });

  function changeValue() {
    // setPerson({ name: 'john', age: 23, hobby: 'study' });
    // setPerson({ test: 'a' });
    setPerson({ ...person, name: 'john' });
  }
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.hobby}</h3>
      <button className="btn" type="button" onClick={changeValue}>
        Change
      </button>
    </div>
  );
};

export default UseStateObject;
