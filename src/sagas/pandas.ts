import { format } from 'path';
import { Panda } from '../types/Panda';
import { slice } from '../redux/pandas';
import { call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

export function* loadPandas() {
  try {
    const response: AxiosResponse<Panda[]> = yield call(axios.get, 'http://localhost:3004/pandas');
    yield put(slice.actions.loadPandasSuccess(response.data));
  } catch (error) {
    yield put(slice.actions.loadPandasFailure(error));
  }
}
