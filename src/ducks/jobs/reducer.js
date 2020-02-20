import * as types from "./types"

const initialState = {
  jobs: [],
  error: null,
  description: null,
  location: null,
  full_time: false,
  allIds: [],
  byId: {},
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
        ...action.jobs.reduce(
          (result, item) => ({
            allIds: result.allIds.includes(item.id)
              ? result.allIds
              : [...result.allIds, item.id],
            byId: {
              ...result.byId,
              [item.id]: item,
            },
          }),
          {
            allIds: state.allIds,
            byId: state.byId,
          },
        ),
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