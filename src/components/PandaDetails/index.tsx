import React from 'react';
import { Panda } from '../../types/Panda';
import HobbiesList from '../HobbiesList';

interface Props {
  panda: Panda;
  onClose(): void;
}

const PandaDetails = (props: Props) => {
  return (
    <div>
      <h1>{props.panda.name}</h1>
      {props.panda.interests && <HobbiesList interests={props.panda.interests} />}
      <div style={{ marginTop: 10 }}>
        <img src={props.panda.image} alt={props.panda.name} />
      </div>
      <div style={{ marginTop: 10 }}>
        <button onClick={props.onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default PandaDetails;
