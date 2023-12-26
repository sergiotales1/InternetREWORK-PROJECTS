import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

function JobDuties({ duties }) {
  return (
    <div className="duties">
      {duties.map((duty, i) => {
        return (
          <div key={i} className="duty-container">
            <MdKeyboardDoubleArrowLeft className="icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default JobDuties;
