import React from "react";
import "./SearchFormsComponent.css"

const SearchFormComponents = () => {
  return (
    <div id="search" className="clearfix">
      <form className="positions">
        <div className="bucket description">
          <h3>Job Description</h3>
          <div className="field">
            <input type="text" name="description" id="description_field" autoComplete="off"/>
          </div>
        </div>

        <div className="bucket location">
          <h3>Location</h3>
          <div className="field">
            <input type="text" name="location" id="location_field" autoComplete="off"/>
          </div>
        </div>

        <div className="bucket fulltime">
          <label className="simplefield">
            <input type="checkbox" name="full_time" id="full_time_field"/>
            Full Time Only
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  )
};

export default SearchFormComponents;