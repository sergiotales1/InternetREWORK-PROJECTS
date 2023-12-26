import React from 'react';
import JobDuties from './JobDuties';

function Jobs({ data: jobs, activeTab }) {
  return (
    <article>
      {jobs.map((job) => {
        const { id, title, company, dates } = job;
        if (activeTab === id)
          return (
            <div key={id}>
              <h1>{title}</h1>
              <h2 className="company">{company}</h2>
              <h3 className="dates">{dates}</h3>
              <JobDuties duties={job.duties} />
            </div>
          );
      })}
    </article>
  );
}

export default Jobs;
