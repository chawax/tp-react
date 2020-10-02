import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PandasList from '../../components/PandasList';
import usePandas from '../../hooks/usePandas';
import { AppState } from '../../redux/store';
import { Panda } from '../../types/Panda';
import { slice as userSlice } from '../../redux/user';

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

  const dispatch = useDispatch();

  const name = useSelector((state: AppState) => state.user.name);
  const firstname = useSelector((state: AppState) => state.user.firstname);

  return (
    <>
      <h1>Liste des pandas</h1>
      <div onClick={() => dispatch(userSlice.actions.setUppercase())}>
        Hello {firstname} {name} !
      </div>
      {loading && <div>Chargement en cours ...</div>}
      {error && <div data-testid="error">{error}</div>}
      {loading === false && <PandasList pandas={pandas} onPress={displayPanda} />}
    </>
  );
};

export default PandasListPage;
