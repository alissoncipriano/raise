import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const linearLoadSlice = createSlice({
  name: 'linearLoad',
  initialState,
  reducers: {
    showLoad(state) {
      return {
        ...state,
        loading: true,
      };
    },
    hideLoad(state) {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { showLoad, hideLoad } = linearLoadSlice.actions;
export const selectLoading = (state: any) =>
  state.linearLoad.loading as boolean;

export default linearLoadSlice.reducer;
