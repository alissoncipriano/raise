import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserInfoProps } from 'routes/Account/Account';

const initialState = {
  userName: '',
  companyCode: '',
  creationDate: '',
  accountType: '',
  office: '',
  closedTickets: '',
  openedTickets: '',
  pictureURL: '',
  companyPictureURL: '',
  email: '',
  user: '',
  bornDate: '',
  company: '',
  loaded: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<UserInfoProps>) {
      return {
        ...state,
        ...payload,
        loaded: true,
      };
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const selectUserName = (state: any) => state.user.userName;
export const selectCompanyCode = (state: any) => state.user.companyCode;
export const selectAccountType = (state: any) => state.user.accountType;
export const selectOffice = (state: any) => state.user.office;
export const selectClosedTickets = (state: any) => state.user.closedTickets;
export const selectCreationDate = (state: any) => state.user.creationDate;
export const selectOpenedTickets = (state: any) => state.user.openedTickets;
export const selectPictureURL = (state: any) => state.user.pictureURL;
export const selectCompanyPictureURL = (state: any) =>
  state.user.companyPictureURL;
export const selectLoaded = (state: any) => state.user.loaded;
export const selectEmail = (state: any) => state.user.email;
export const selectUser = (state: any) => state.user.user;
export const selectBornDate = (state: any) => state.user.bornDate;
export const selectCompany = (state: any) => state.user.company;

export default userSlice.reducer;
