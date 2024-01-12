import { createBrowserRouter } from 'react-router-dom';

import OnBoardPage from './pages/onboard';
import AuthCheckedLayout from './layouts/AuthCheckedLayout';
import LoginPage from './pages/login';
import NotFoundPage from './pages/NotFoundPage';
import StartPage from './pages/onboard';
import TeacherPage from './pages/teacher/index';
import SuccessModal from './components/modal/successmodal';
import WarningSignModal from './components/modal/warningsign';
import WarningSignModalid from './components/modal/warningsignid';
import ConsultantMainPage from './pages/consultant/consultantmain';
import SignUpPage from './pages/signup/index';

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
    path: '*',
    element: <NotFoundPage />,
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
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/consultantMain',
    element: <ConsultantMainPage />,
  },

  {
    path: '/teacher',
    element: <TeacherPage />,
  },
  {
    path: '/successmodal',
    element: <SuccessModal />,
  },
  {
    path: '/warningsignmodal',
    element: <WarningSignModal />,
  },
  {
    path: '/warningsignmodalid',
    element: <WarningSignModalid />,
  },
]);

export default routers;
