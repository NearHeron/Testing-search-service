import React from "react";

const JobItemComponent = ({ job }) => {
  return (
    <React.Fragment>
      <div>
        <img src={job.company_logo} alt="company_logo" />
        <p>{job.description}</p>
      </div>
    </React.Fragment>
  )
};

export default JobItemComponent;