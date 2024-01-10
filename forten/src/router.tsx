import { createBrowserRouter } from 'react-router-dom';

import OnBoardPage from './pages/onboard/onboard';
import AuthCheckedLayout from './layouts/AuthCheckedLayout';
import LoginPage from './pages/login';
import NotFoundPage from './pages/NotFoundPage';
import StartPage from './pages/onboard/start';
import TeacherPage from './pages/teacher/teacher';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <AuthCheckedLayout />,
    children: [
      { index: true, element: <StartPage /> },
      // { path: '알아서 적으세요', element: <알아서페이지 />  만드시면됩니다},
    ],
  },
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/onboard',
    element: <OnBoardPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/teacher',
    element: <TeacherPage />,
  },
]);

export default routers;
