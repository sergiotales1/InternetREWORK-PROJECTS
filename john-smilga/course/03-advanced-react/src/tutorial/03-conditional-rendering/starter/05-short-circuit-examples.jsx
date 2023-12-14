import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* {text || (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {(user && <SomeComponent name={user.name} />) || 'Nothing to show'}
      <h1 style={{ margin: '1rem 0' }}>Ternary Operator</h1>
      <button type="button" className="btn">
        {isEditing ? 'edit' : 'add'}
      </button>
      <h1>
        {user ? (
          <div>
            <h1>Hello user {user.name}</h1>
          </div>
        ) : (
          <div>
            <h1>Please log in</h1>
          </div>
        )}{' '}
      </h1>
    </div>
  );
};

const SomeComponent = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h1>SoMeThInG</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
