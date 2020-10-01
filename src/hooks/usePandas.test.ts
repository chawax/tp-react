import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import pandas from '../pandas';
import usePandas from './usePandas';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should set loading then pandas list', async () => {
  mockedAxios.get.mockResolvedValue({ data: pandas });

  const { result, waitForNextUpdate } = renderHook(() => usePandas());

  expect(result.current.loading).toBeTruthy();
  expect(result.current.error).toBeUndefined();
  expect(result.current.pandas).toEqual([]);

  await waitForNextUpdate();

  expect(result.current.loading).toBeFalsy();
  expect(result.current.error).toBeUndefined();
  expect(result.current.pandas).toBeDefined();
  expect(result.current.pandas.length).toEqual(10);
});

test('should set loading then error', async () => {
  mockedAxios.get.mockRejectedValue({ message: 'Something went wrong !' });

  const { result, waitForNextUpdate } = renderHook(() => usePandas());

  expect(result.current.loading).toBeTruthy();
  expect(result.current.error).toBeUndefined();
  expect(result.current.pandas).toEqual([]);

  await waitForNextUpdate();

  expect(result.current.loading).toBeFalsy();
  expect(result.current.error).toEqual('Something went wrong !');
  expect(result.current.pandas).toEqual([]);
});
