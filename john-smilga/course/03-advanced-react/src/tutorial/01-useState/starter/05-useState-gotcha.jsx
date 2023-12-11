import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        className="btn"
        onClick={() =>
          setInterval(() => {
            setCount((currentValue) => {
              return currentValue + 1;
            });
          }, 3000)
        }
      >
        click
      </button>
    </div>
  );
};

export default UseStateGotcha;
