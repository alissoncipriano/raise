import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer/Footer';
import AlertMessage from 'components/AlertMessage/AlertMessage';
import LinearLoading from 'components/LinearLoading/LinearLoading';

import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <LinearLoading />

      <Sidebar />
      <AlertMessage />
      <Outlet />
      <Footer />
    </>
  );
}
