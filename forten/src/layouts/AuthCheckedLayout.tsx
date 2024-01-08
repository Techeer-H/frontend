import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function AuthCheckedLayout() {
  // TODO: 회원인지 확인하는 로직
  return (
    <>
      <header>
        <NavBar />{' '}
      </header>{' '}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthCheckedLayout;
