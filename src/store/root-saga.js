import { call, all } from 'redux-saga/effects';
import { watchFetchJob } from "../ducks/jobs/sagas"


export default function*() {
  yield all([
    call(watchFetchJob)
  ]);
}
