import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion';

function Questions({ data }) {
  const [activeId, setActiveId] = useState(null);

  const filterActiveId = (id) => {
    setActiveId(id);
    if (activeId === id) setActiveId(null);
  };
  return (
    <article className="container">
      {data.map((question) => {
        return (
          <SingleQuestion
            filterActiveId={filterActiveId}
            key={question.id}
            {...question}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        );
      })}
    </article>
  );
}

export default Questions;
