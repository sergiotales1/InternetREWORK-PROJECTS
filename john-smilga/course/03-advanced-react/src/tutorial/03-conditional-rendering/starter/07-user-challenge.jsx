import { useState } from 'react';

const UserChallenge = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      {value ? (
        <div>
          <h4>hello there, {value.name}</h4>
          <button type="button" onClick={() => setValue(null)} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button
            type="button"
            onClick={() => setValue({ name: 'john' })}
            className="btn"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
