import React from "react";
import "./JobsListComponent.css";
import { Link } from "react-router-dom";

const JobsListComponent = ({ jobs, clickHandler }) => {
  return (
    <React.Fragment>
      <ul>
        {jobs.map(job => {
          return (
            <Link to='/vacancy'>
              <li key={job.id} id={job.id} className="jobListItem" onClick={clickHandler}>
                <div>
                  <p id={job.id}>{job.title}</p>
                  <span id={job.id}>{job.company}, {job.type}</span>
                </div>
                <div>
                  <p id={job.id}>{job.location}</p>
                  <p id={job.id}>{job.created_at}</p>
                </div>
              </li>
            </Link>

          )
        })}
      </ul>
    </React.Fragment>
  )
};

export default JobsListComponent;