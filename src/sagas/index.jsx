import { all, fork }   from 'redux-saga/effects';

import { getPostsSaga } from './getAllPostsSaga';
import { callSingleMovieSaga } from './getSingleMovieSaga';

export default function* rootSaga() {
  yield all([
    getPostsSaga(),
    callSingleMovieSaga()
  ])
}
