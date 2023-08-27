import { useLocation } from 'react-router-dom';

const useSidebar = () => {
  const isLogged = true;
  const location = useLocation();

  const isSelectedLink = (link: string) => location.pathname.includes(link);

  return { location, isLogged, isSelectedLink };
};

export default useSidebar;
