import { Outlet } from 'react-router-dom';

function AuthCheckedLayout() {
  // TODO: 회원인지 확인하는 로직
  return (
    <>
      <header>

      </header>{' '}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthCheckedLayout;
