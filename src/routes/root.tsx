import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
