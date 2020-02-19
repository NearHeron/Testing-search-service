import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { jobActions as actions } from './actions';
import services from './services';
import * as types from './types';

export function* watchFetchJob() {
  yield takeLatest(types.FETCH_JOBS_REQUEST, fetchJobAsync);
}

function* fetchJobAsync({ credentials }) {
  try {
    const data = yield call(services.getJobs, credentials);

    yield put(actions.fetchJobsSuccess(data));
  } catch (error) {
    yield put(actions.fetchJobsError(error));
  }
}
