import { combineReducers } from 'redux';
import { createRouterReducer } from "../ducks/router";
import { jobReducer } from "../ducks/jobs/reducer";

export default history =>
  combineReducers({
    router: createRouterReducer(history),
    jobs: jobReducer
  });
