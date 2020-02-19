import React from "react";
import HeaderComponent from "./Components/Header";
import SearchFormComponents from "./Components/SearchForms";
import { withRouter } from 'react-router';

const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <div className="wrapper">
        <SearchFormComponents/>
      </div>
    </React.Fragment>

  )
};

export default withRouter(App);