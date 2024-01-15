import { createBrowserRouter } from 'react-router-dom';

import SignUpPage from './pages/signup/main/index';
import OnBoardPage from './pages/onboard';
import AuthCheckedLayout from './layouts/AuthCheckedLayout';
import LoginPage from './pages/login/main';
import NotFoundPage from './pages/NotFoundPage';
import StartPage from './pages/onboard';
import TeacherPage from './pages/teacher/main/index';
import SuccessModal from './pages/signup/modal/successmodal';
import WarningSignModal from './pages/signup/modal/warningsign';
import WarningSignModalid from './pages/login/modal/warningsignid';
import ConsultantMainPage from './pages/consultant/consultantmain';

import ConsultantRating from './pages/consultant/modal/consultantrating';
import StudentDetail from './pages/consultant/modal/studentDetail';
import TeacherRatingPage from './pages/teacher/modal/teacherrating';

import Evaluationstudent from './pages/teacher/evaluationstudent/index';

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

  // 모달창들 확인용 (실제로는 모달창은 라우터가 주어지지 않습니다)
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
  {
    path: '/consultantrating',
    element: <ConsultantRating />,
  },
  {
    path: '/studenteetail',
    element: <StudentDetail />,
  },
  {
    path: '/teacherratingpage',
    element: <TeacherRatingPage />,
  },
  {
    path: '/evaluate',
    element: <Evaluationstudent />,
  },
]);

export default routers;
