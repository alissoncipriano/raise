import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AlertType } from 'components/AlertMessage/useAlertMessage';

const initialState = {
  open: false as boolean,
  message: '' as string,
  type: '' as 'success' | 'error' | '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert(state, { payload }: PayloadAction<AlertType>) {
      return {
        ...state,
        open: true,
        message: payload.message,
        type: payload.type || 'error',
      };
    },
    hideAlert(state) {
      return {
        ...state,
        open: false,
        type: '',
      };
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export const selectOpen = (state: any) => state.alert.open as boolean;
export const selectMessage = (state: any) => state.alert.message as string;
export const selectType = (state: any) => state.alert.type as string;

export default alertSlice.reducer;
