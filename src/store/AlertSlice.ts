import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
};

const alertStore = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert(state, { payload }: PayloadAction<string>) {
      return {
        ...state,
        open: true,
        message: payload,
      };
    },
    hideAlert(state) {
      return {
        ...state,
        open: false,
      };
    },
  },
});

export const { showAlert, hideAlert } = alertStore.actions;
export const selectOpen = (state: any) => state.alert.open as boolean;
export const selectMessage = (state: any) => state.alert.message as string;

export default alertStore.reducer;
