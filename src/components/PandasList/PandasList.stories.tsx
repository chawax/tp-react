import { action } from '@storybook/addon-actions';
import React from 'react';
import PandasList from '.';
import pandas from '../../pandas';

export default {
  title: 'PandasList',
  component: PandasList,
};

export const aListOfPandas = () => (
  <div style={{ padding: 20 }}>
    <PandasList pandas={pandas} onPress={action('on press')} />
  </div>
);
