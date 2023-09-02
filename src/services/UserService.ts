import { useDispatch } from 'react-redux';
import { hideLoad, showLoad } from 'store/LinearLoadSlice';
import { setUserInfo } from 'store/UserSlice';
import { useNavigate } from 'react-router-dom';

import { LOCAL_STORAGE } from '../constants';
import { loginMock, userInfoMock } from 'mocks';

var ls = require('local-storage');

const UserService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authenticate = async () => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        dispatch(hideLoad());
        ls.set(LOCAL_STORAGE.USER_NAME, loginMock.userName);
        ls.set(LOCAL_STORAGE.COMPANY_CODE, loginMock.companyCode);
        navigate(`/`);
      }, 500);
    } catch (error) {}
  };

  const getUserInfo = async () => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        dispatch(hideLoad());

        dispatch(
          setUserInfo({
            ...userInfoMock,
          })
        );
      }, 500);
    } catch (error) {}
  };

  const updateUserPassword = async (newPassword: string) => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        dispatch(hideLoad());
      }, 500);
    } catch (error) {}
  };

  return { authenticate, getUserInfo, updateUserPassword };
};

export default UserService;
