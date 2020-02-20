import React from "react";
import HeaderComponent from "./Components/Header";
import SearchFormsContainer from "./Containers/SearchForms";
import { withRouter } from 'react-router';
import JobsListContainer from "./Containers/JobsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobItemContainer from "./Containers/JobItem";

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <HeaderComponent/>
        <div className="wrapper">
          <SearchFormsContainer />
          <Switch>
            <Route path='/' component={JobsListContainer} exact />
            <Route path='/vacancy' component={JobItemContainer} exact />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  )
};

export default withRouter(App);