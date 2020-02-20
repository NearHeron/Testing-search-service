import React, {useState} from "react";
import JobItemComponent from "../../Components/JobItem";
import * as selector from "../../ducks/jobs/selectors"
import { connect } from "react-redux";

const JobItemContainer = ({ id, byId }) => {
  const job = byId[id];
  return (
    <JobItemComponent job={job}/>
  )
};

const mapStateToProps = (state) => ({
  id: selector.currentIdSelector(state),
  byId: selector.jobsByIdSelector(state)
});

export default connect(mapStateToProps)(JobItemContainer);