import { call, all } from 'redux-saga/effects';
import { watchFetchJob } from "../ducks/jobs";


export default function*() {
  yield all([
    call(watchFetchJob)
  ]);
}
