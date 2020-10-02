import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { Panda } from '../types/Panda';
import { slice } from '../redux/pandas';

const usePandas = () => {
  const pandas: Panda[] = useSelector((state: AppState) => state.pandas.data);
  const loading: boolean = useSelector((state: AppState) => state.pandas.fetching);
  const error: Error | undefined = useSelector((state: AppState) => state.pandas.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(slice.actions.loadPandasRequest());
  }, [dispatch]);
  return {
    pandas: pandas || [],
    error: error?.message,
    loading,
  };
};

/*
// Version sans Saga
const usePandas = () => {
  const [pandas, setPandas] = useState<Panda[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3004/pandas')
      .then((response: AxiosResponse) => {
        setPandas(response.data);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {
    pandas,
    error,
    loading,
  };
};
*/

export default usePandas;
