import * as types from "./types"

const initialState = {
  jobs: [],
  error: null,
  description: null,
  location: null,
  full_time: false,
  isLoading: false
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_JOBS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.jobs,
        isLoading: false
      };
    case types.FETCH_JOBS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};