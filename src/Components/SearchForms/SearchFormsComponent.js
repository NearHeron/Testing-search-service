import React from "react";
import "./SearchFormsComponent.css"

const SearchFormComponents = ({ handleSubmit, handleChangeDescription, handleChangeLocation, isChecked, description, location }) => {

  return (
    <div id="search" className="clearfix">
      <form className="positions" onSubmit={handleSubmit}>
        <div className="bucket description">
          <h3>Job Description</h3>
          <div className="field">
            <input type="text" name="description" id="description_field" value={description} onChange={handleChangeDescription} autoComplete="off"/>
          </div>
        </div>

        <div className="bucket location">
          <h3>Location</h3>
          <div className="field">
            <input type="text" name="location" id="location_field" value={location} onChange={handleChangeLocation} autoComplete="off"/>
          </div>
        </div>

        <div className="bucket fulltime">
          <label className="simplefield">
            <input type="checkbox" name="full_time" id="full_time_field" onChange={isChecked}/>
            Full Time Only
          </label>
        </div>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
};

export default SearchFormComponents;