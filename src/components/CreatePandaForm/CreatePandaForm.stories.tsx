import { action } from '@storybook/addon-actions';
import React from 'react';
import CreatePandaForm from '.';

export default {
  title: 'CreatePandaForm',
  component: CreatePandaForm,
};

export const defaultForm = () => (
  <div style={{ padding: 20 }}>
    <CreatePandaForm onSubmit={action('on submit')} onCancel={action('on cancel')} />
  </div>
);
