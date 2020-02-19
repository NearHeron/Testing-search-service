import * as types from "./types";

export const jobActions = {
  fetchJobsSuccess(jobs) {
    return {
      type: types.FETCH_JOBS_SUCCESS,
      jobs
    }
  },
  fetchJobsRequest(credentials) {
    return {
      type: types.FETCH_JOBS_REQUEST,
      credentials
    }
  },
  fetchJobsError(error) {
    return {
      type: types.FETCH_JOBS_ERROR,
      error
    }
  }
};