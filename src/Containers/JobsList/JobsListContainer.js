import React from "react";
import JobsListComponent from "../../Components/JobsList";
import * as selector from "../../ducks/jobs/selectors"
import { connect } from "react-redux";
import { jobActions as actions } from "../../ducks/jobs";

const JobListContainer = ({ jobs, changeCurrentId }) => {

  const clickHandler = (event) => {
    changeCurrentId(event.target.id)
  };

  return (
    <React.Fragment>
      <JobsListComponent jobs={jobs} clickHandler={clickHandler}/>
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  jobs: selector.jobSelector(state),
});

export default connect(mapStateToProps, {
  changeCurrentId: actions.selectedVacancy
})(JobListContainer);