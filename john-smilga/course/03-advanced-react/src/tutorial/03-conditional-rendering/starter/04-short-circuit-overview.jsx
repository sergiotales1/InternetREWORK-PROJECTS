import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('carol');

  return (
    <>
      <h1>Falsy OR: {text || name}</h1>
      <h1>Falsy AND: {text && name}</h1>
      <h1>Truthy OR: {name && 'hello world'}</h1>
      <h1>Truthy AND: {name && 'hello world'}</h1>
    </>
  );
};
export default ShortCircuitOverview;
