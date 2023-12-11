import { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(0)
  // console.log(useState(1, 2));
  // const value = useState(1)[0];
  // const func = useState('hello');
  // console.log(value);
  // console.log(func);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>useState basics</h2>
      <h1>you clicked {count} times</h1>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </>
  );
};

export default UseStateBasics;
