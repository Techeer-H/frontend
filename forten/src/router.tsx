import { createBrowserRouter } from 'react-router-dom';

import SignUpPage from './pages/signup/main/index';
import LoginPage from './pages/login/main';
import NotFoundPage from './pages/NotFoundPage';
import TeacherPage from './pages/teacher/main/index';
import ConsultantMainPage from './pages/consultant/consultantmain';

import ConsultantRating from './pages/consultant/modal/consultantrating';

import Evaluationstudent from './pages/teacher/evaluationstudent/index';
import OnBoardingPage from './pages/onboard/totalpage/index';

// 변경된 페이지들
import NewAiPrompt from './pages/consultant/AiPrompt/aiPrompt';
import NewSchoolTest from './pages/consultant/graderegister/inputTest';
import Jaemin from './pages/onboard/wavepage/index';
import Jaeminse from './pages/onboard/jaeminStartPage/index';
import JaeminSecond from './pages/onboard/jaeminSecond/index';

const routers = createBrowserRouter([
  {
    path: '/',
    // element: <AuthCheckedLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      // { path: '알아서 적으세요', element: <알아서페이지 />  만드시면됩니다},
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
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
    path: '/consultantrating',
    element: <ConsultantRating />,
  },
  {
    path: '/evaluate',
    element: <Evaluationstudent />,
  },

  {
    path: '/onboarding',
    element: <OnBoardingPage />,
  },

  {
    path: '/jaemin',
    element: <Jaemin />,
  },

  {
    path: '/jaeminse',
    element: <Jaeminse />,
  },

  {
    path: '/jaeminsecond',
    element: <JaeminSecond />,
  },

  // 변경된 페이지들 주소
  {
    path: '/newaiprompt',
    element: <NewAiPrompt />,
  },
  {
    path: '/newschooltest',
    element: <NewSchoolTest />,
  },
]);

export default routers;
