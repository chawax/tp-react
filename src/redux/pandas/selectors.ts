import { Panda } from '../../types/Panda';
import { AppState } from '../store';

export const getPandas = (state: AppState) => state.pandas.data;

export const isPandasFetching = (state: AppState) => state.pandas.fetching;

export const getPandasError = (state: AppState) => state.pandas.error;

export const findPanda = (state: AppState, { id }: { id: string }): Panda | undefined => {
  return state.pandas.data.find((panda) => panda.key === id);
};
