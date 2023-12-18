import React from 'react';
import SingleQuestion from './SingleQuestion';

function Questions({ data }) {
  console.log(data);
  return (
    <article className="container">
      {data.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </article>
  );
}

export default Questions;
