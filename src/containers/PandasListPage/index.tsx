import React, { useEffect } from 'react';
import PandasList from '../../components/PandasList';
import usePandas from '../../hooks/usePandas';
import { Panda } from '../../types/Panda';

const displayPanda = (panda: Panda) => {
  alert(`panda ${panda.name} was pressed`);
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
      {error && <div data-testid="error">{error}</div>}
      {loading === false && <PandasList pandas={pandas} onPress={displayPanda} />}
    </>
  );
};

export default PandasListPage;
