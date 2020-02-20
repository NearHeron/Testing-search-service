import * as types from "./types"

const initialState = {
  jobs: [],
  error: null,
  selectedId: null,
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
    case types.SELECTED_JOB_POSITION:
      return {
        ...state,
        selectedId: action.id
      }
    default:
      return state;
  }
};