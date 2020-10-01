import React from 'react';
import { Panda } from '../../types/Panda';
import PandaItem from '../PandaItem';

interface Props {
  pandas: Panda[];
  onPress: (panda: Panda) => void;
}

const PandasList = (props: Props) => {
  return (
    <div>
      {props.pandas.map((panda: Panda) => (
        <PandaItem key={panda.key} name={panda.name} interests={panda.interests} onPress={() => props.onPress(panda)} />
      ))}
    </div>
  );
};

export default PandasList;
