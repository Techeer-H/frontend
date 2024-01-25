import { createBrowserRouter } from 'react-router-dom';

import SignUpPage from './pages/signup/main/index';
import OnBoardPage from './pages/onboard/firstpage';
import AuthCheckedLayout from './layouts/AuthCheckedLayout';
import LoginPage from './pages/login/main';
import NotFoundPage from './pages/NotFoundPage';
import StartPage from './pages/onboard/firstpage';
import TeacherPage from './pages/teacher/main/index';
import WarningSignModal from './pages/signup/modal/warningsign';
import ConsultantMainPage from './pages/consultant/consultantmain';

import ConsultantRating from './pages/consultant/modal/consultantrating';

import Evaluationstudent from './pages/teacher/evaluationstudent/index';
import OnBoardingPage from './pages/onboard/thirdpage/index';

import AiPromptPage from './pages/consultant/AiPrompt';

import MockGrade from './pages/consultant/graderegister/mockTest';
import SchoolGrade from './pages/consultant/graderegister/schoolTest';

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
    path: '/schooltest',
    element: <SchoolGrade />,
  },

  {
    path: '/mocktest',
    element: <MockGrade />,
  },
  {
    path: '/aiprompt',
    element: <AiPromptPage />,
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
]);

export default routers;
