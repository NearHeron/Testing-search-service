import React, { useState } from "react"
import SearchFormComponents from "../../Components/SearchForms";
import { connect } from "react-redux";
import { jobActions as actions } from "../../ducks/jobs";
import * as selector from "../../ducks/jobs/selectors"

const SearchFormsContainer = ({ fetchJobs }) => {

  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchJobs({
      description,
      location,
      full_time: checkbox
    });
    setDescription('');
    setLocation('')
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value)
  };

  const isChecked = (event) => {
    setCheckbox(event.target.checked);
  };


  return (
    <SearchFormComponents
      handleSubmit={handleSubmit}
      handleChangeDescription={handleChangeDescription}
      handleChangeLocation={handleChangeLocation}
      description={description}
      location={location}
      isChecked={isChecked} />
  )
};

export default connect(selector.allStateSelector, {
  fetchJobs: actions.fetchJobsRequest
})(SearchFormsContainer);
