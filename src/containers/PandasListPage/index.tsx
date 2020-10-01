import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import PandasList from '../../components/PandasList';
import { Panda } from '../../types/Panda';

const displayPanda = (panda: Panda) => {
  alert(`panda ${panda.name} was pressed`);
};

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
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);
  return {
    pandas,
    error,
    loading,
  };
};

const PandasListPage = () => {
  const { pandas, loading, error } = usePandas();

  useEffect(() => {
    if (error) {
      console.log(`***** ${error} *****`);
    }
  }, [error]);

  return (
    <>
      <h1>Liste des pandas</h1>
      {loading && <div>Chargement en cours ...</div>}
      {error && <div>{error}</div>}
      {loading === false && <PandasList pandas={pandas} onPress={displayPanda} />}
    </>
  );
};

export default PandasListPage;
