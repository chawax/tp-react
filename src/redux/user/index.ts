import { createSlice } from '@reduxjs/toolkit';

// Typage du state

export interface State {
  name?: string;
  firstname?: string;
}

// State initial

const initialState: State = {
  name: 'THIERRY',
  firstname: 'Olivier',
};

// Export du slice Redux Toolkit
// Immer est utilisé en interne

export const slice = createSlice({
  name: '@@app/user',
  initialState: initialState,
  reducers: {
    setUppercase: (state: State) => {
      state.name = state.name?.toUpperCase();
      state.firstname = state.firstname?.toUpperCase();
    },
  },
});
