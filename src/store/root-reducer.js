import { combineReducers } from 'redux';
import { createRouterReducer } from "../ducks/router";
import { jobReducer } from "../ducks/jobs";

export default history =>
  combineReducers({
    router: createRouterReducer(history),
    jobs: jobReducer
  });
