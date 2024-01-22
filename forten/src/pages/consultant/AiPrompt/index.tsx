import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/consultant/navBar';
import * as S from './styles';
import StudentTable from '../../../components/modal/studentTable';
import WordBox from '../../../components/modal/wordBox';
import ParentAvergy from '../../../components/modal/parentAvergy';
import WriteButton from '../../../components/modal/writeButton';
import StudentAvergy from '../../../components/modal/studentAvergy';
import SchoolGrades from '../../../components/modal/schoolGrades'; // 내신 성적
import SchoolMock from '../../../components/modal/schoolMock'; // 모의고사 성적
import ConsultantRatingPage from '../modal/consultantrating';
import { useState } from 'react';

// const FlexWrapper = styled.div``;

const AiPromptPage = () => {
  const location = useLocation();

  // 학생 아이디 가져오기 성공
  // 통신하는 자식 컴포넌트에게 props 값을 넘겨주면 됨.
  console.log('ai 프롬트 학생 아이디 가져오기', location.state.studentId);
  const studentId = location.state.studentId;

  // 상담 완료 후 모달 껐다 켰다 하는 부분, 모달은 ConsultantRatingPage임
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => {
    setIsModal(!isModal);
  }
  const closeModal = () => {
    setIsModal(!isModal);
  }

  return (
    <S.background>
      {isModal && (
        <ConsultantRatingPage
          close={closeModal} />
      )}
      <Navbar />
      <S.fullcontainer>
        <S.LeftFullContainer>
          <StudentTable studentId={studentId} />
        </S.LeftFullContainer>
        <div>
          <S.FlexContainer>
            <S.FlexBox>
              {/* 학생 성적(내신, 모의고사) */}
              <SchoolGrades studentId={studentId} />
              <SchoolMock studentId={studentId} />
            </S.FlexBox>
            <S.Container>
              {/* 강사가 평가한 학생 평균, 부모님 평가 */}
              <StudentAvergy studentId={studentId} />
              <ParentAvergy studentId={studentId} />
            </S.Container>
          </S.FlexContainer>
          <WordBox studentId={studentId} />
          <WriteButton onConfirm={modalOpen} />
        </div>
      </S.fullcontainer>
    </S.background>
  );
};

export default AiPromptPage;
