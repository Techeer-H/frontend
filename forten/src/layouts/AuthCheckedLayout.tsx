import { Outlet } from 'react-router-dom';
import Navbar from '../components/teacher/navBar';

function AuthCheckedLayout() {
  // TODO: 회원인지 확인하는 로직
  return (
    <>
      <header>
        <Navbar />
      </header>{' '}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthCheckedLayout;
