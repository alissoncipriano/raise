import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
