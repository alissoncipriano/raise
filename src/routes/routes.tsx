import Root from './root';
import ErrorPage from './error/error-page';
import Login from './Login';
import Servicos from './Servicos';
import Sobre from './Sobre';

export const LOGIN_ROUTE = {
  path: 'login',
  element: <Login />,
  tag: 'Entrar',
};

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Servicos />,
        tag: 'Home',
      },
      {
        path: 'sobre',
        element: <Sobre />,
        tag: 'Sobre Nós',
      },
      {
        ...LOGIN_ROUTE,
      },
    ],
  },
];
