import { createBrowserRouter } from 'react-router-dom';

import SignUpPage from './pages/signup/main/index';
import OnBoardPage from './pages/onboard/firstpage';
import AuthCheckedLayout from './layouts/AuthCheckedLayout';
import LoginPage from './pages/login/main';
import NotFoundPage from './pages/NotFoundPage';
import StartPage from './pages/onboard/firstpage';
import TeacherPage from './pages/teacher/main/index';
import SuccessModal from './pages/signup/modal/successmodal';
import WarningSignModal from './pages/signup/modal/warningsign';
import WarningSignModalid from './pages/login/modal/warningsignid';
import ConsultantMainPage from './pages/consultant/consultantmain';

import ConsultantRating from './pages/consultant/modal/consultantrating';
import StudentDetail from './pages/teacher/modal/studentDetail';
import TeacherRatingPage from './pages/teacher/modal/teacherrating';

import Evaluationstudent from './pages/teacher/evaluationstudent/index';
import OnBoardingPage from './pages/onboard/thirdpage/index';

import AiPromptPage from './pages/consultant/AiPrompt';
import RegisterStudent from './pages/consultant/modal/registerstudent';
import RegisterModal from './pages/consultant/modal/registermodal';
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
    path: '/aiprompt',
    element: <AiPromptPage />,
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
    path: '/studentdetail',
    element: <StudentDetail />,
  },
  {
    path: '/teacherrating',
    element: <TeacherRatingPage />,
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
    path: '/registermodal',
    element: <RegisterModal />,
  },
]);

export default routers;
