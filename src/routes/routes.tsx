import Root from './root';
import ErrorPage from './error/error-page';
import Login from './Login';
import Sobre from './Sobre';
import Home from './Home/Home';
import Account from './Account/Account';

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
        element: <Home />,
        tag: 'Home',
      },
      {
        path: 'sobre',
        element: <Sobre />,
        tag: 'Sobre Nós',
      },
      {
        path: 'conta',
        element: <Account />,
        tag: 'Minha Conta',
      },
      {
        ...LOGIN_ROUTE,
      },
    ],
  },
];
