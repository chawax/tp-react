import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Panda } from '../types/Panda';

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

export default usePandas;
