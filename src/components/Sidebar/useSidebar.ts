import { useLocation } from 'react-router-dom';
import { routes as originalRoutes } from 'routes/routes';
import { useNavigate } from 'react-router-dom';

import { LOCAL_STORAGE } from '../../constants';

var ls = require('local-storage');

const useSidebar = () => {
  const routes = [...originalRoutes[0].children];
  const isLogged = ls.get(LOCAL_STORAGE.USER_NAME);
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    ls.remove(LOCAL_STORAGE.USER_NAME);
    ls.remove(LOCAL_STORAGE.COMPANY_CODE);
    navigate(`/`);
    navigate(0);
  };

  const isSelectedLink = (link: string) => {
    if (link === '') return location.pathname === '/';

    return location.pathname.includes(link);
  };

  let navItems = [...routes];

  if (isLogged)
    navItems = navItems.filter(
      (item) => !item.path.includes('login') && !item.path.includes('sobre')
    );
  else navItems = navItems.filter((item) => !item.path.includes('conta'));

  return { location, isLogged, isSelectedLink, navItems, logout };
};

export default useSidebar;
