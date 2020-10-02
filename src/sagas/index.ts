import { all, takeLatest } from 'redux-saga/effects';
import { slice } from '../redux/pandas';
import { loadPandas } from './pandas';

export function* rootSaga() {
  yield all([takeLatest(slice.actions.loadPandasRequest, loadPandas)]);
}

export * from './pandas';
