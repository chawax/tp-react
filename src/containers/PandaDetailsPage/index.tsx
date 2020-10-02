import { History } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PandaDetails from '../../components/PandaDetails';
import { findPanda } from '../../redux/pandas/selectors';
import { AppState } from '../../redux/store';
import { Panda } from '../../types/Panda';

const usePanda = (id: string): Panda | undefined => {
  return useSelector((state: AppState) => findPanda(state, { id }));
};

const PandaDetailsPage = () => {
  const { id } = useParams<{ id: string }>(); // Récupération du paramètre `id` dans le path
  const panda = usePanda(id);

  const history: History = useHistory();
  const handleClose = () => {
    history.goBack();
  };

  return (
    <>
      <div style={{ padding: 20 }}>{panda ? <PandaDetails panda={panda} onClose={handleClose} /> : null}</div>
    </>
  );
};

export default PandaDetailsPage;
