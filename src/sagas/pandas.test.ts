import axios from 'axios';
import { Action } from 'redux';
import { runSaga } from 'redux-saga';
import pandas from '../pandas';
import { slice } from '../redux/pandas';
import { loadPandas } from './pandas';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loadPandas', () => {
  const {
    actions: { loadPandasRequest, loadPandasSuccess, loadPandasFailure },
  } = slice;

  // Mock de axios.get

  afterEach(() => {
    // On fait un reset pour que les compteurs d'appel soient remis à zéro
    mockedAxios.get.mockReset();
  });

  it('api call was successful', async () => {
    // Mock de Axios

    mockedAxios.get.mockResolvedValue({ data: pandas });

    // Configuration et exécution de la saga

    const state = {};
    const action = loadPandasRequest();
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };

    // @ts-ignore
    await runSaga(sagaConfig, loadPandas, action);

    // Contrôle des actions dispatchées

    expect(dispatched).toEqual([loadPandasSuccess(pandas)]);

    // Contrôle des appels sur Axios

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('api call failed', async () => {
    // Mock de Axios

    const error = new Error('Something went wrong !');
    mockedAxios.get.mockRejectedValue(error);

    // Configuration et exécution de la saga

    const state = {};
    const action = loadPandasRequest();
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };

    // @ts-ignore
    await runSaga(sagaConfig, loadPandas, action);

    // contrôle des actions dispatchées

    expect(dispatched).toEqual([loadPandasFailure(error)]);

    // Contrôle des appels de Axios

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
