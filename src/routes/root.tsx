import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer/Footer';
import AlertMessage from 'components/AlertMessage/AlertMessage';

import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Sidebar />
      <AlertMessage />
      <Outlet />
      <Footer />
    </>
  );
}
