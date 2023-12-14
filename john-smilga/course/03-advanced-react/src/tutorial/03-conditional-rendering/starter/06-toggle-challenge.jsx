import { useState, useEffect } from 'react';

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setValue(!value);
        }}
        className="btn"
      >
        Click me to {!value ? 'activate' : 'deactivate'}
      </button>
      {value && <MyComponent />}
    </div>
  );
};

const MyComponent = () => {
  return <h1 className="alert alert-danger">ACTIVATED!</h1>;
};

export default ToggleChallenge;
