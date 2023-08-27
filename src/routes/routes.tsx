import Root from './root';
import ErrorPage from './error/error-page';
import Home from './Home/Home';

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
        tag: 'Home',
      },
      {
        path: 'sobre-nos',
        element: <>Sobre Nós</>,
        tag: 'Sobre Nós',
      },
    ],
  },
];
