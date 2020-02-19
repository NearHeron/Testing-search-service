import React from "react";
import HeaderComponent from "./Components/Header";
import SearchFormsContainer from "./Containers/SearchForms";
import { withRouter } from 'react-router';

const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <div className="wrapper">
        <SearchFormsContainer />
      </div>
    </React.Fragment>

  )
};

export default withRouter(App);