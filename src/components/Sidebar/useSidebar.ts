import { useLocation } from 'react-router-dom';
import { routes as originalRoutes } from 'routes/routes';

const useSidebar = () => {
  const routes = [...originalRoutes[0].children];
  const isLogged = false;
  const location = useLocation();

  const isSelectedLink = (link: string) => {
    if (link === '') return location.pathname === '/';

    return location.pathname.includes(link);
  };

  let navItems = [...routes];

  if (isLogged)
    navItems = navItems.filter((item) => !item.path.includes('login'));

  return { location, isLogged, isSelectedLink, navItems };
};

export default useSidebar;
