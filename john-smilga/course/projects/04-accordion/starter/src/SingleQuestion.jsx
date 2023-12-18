import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ info, title }) => {
  const [textOpen, setTextOpen] = useState(false);
  return (
    <div className="single-question">
      <h1>{title}</h1>
      {textOpen && <p>{info}</p>}
      <button type="button" onClick={() => setTextOpen(!textOpen)}>
        {textOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </div>
  );
};

export default SingleQuestion;
