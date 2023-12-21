import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ info, title, id, filterActiveId, activeId }) => {
  return (
    <div className={`single-question`}>
      <div className="title-button">
        <h1>{title}</h1>
        <button
          type="button"
          onClick={() => {
            filterActiveId(id);
          }}
        >
          {activeId === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {activeId === id && <p>{info}</p>}
    </div>
  );
};

export default SingleQuestion;
