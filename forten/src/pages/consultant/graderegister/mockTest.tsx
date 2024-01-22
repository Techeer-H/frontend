import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../../components/consultant/navBar';
import ChooseSchoolMock from '../../../components/consultant/chooseSchoolMock';
import GradeSelect from '../../../components/consultant/gradeSelect';
import SubjectLine from '../../../components/consultant/subjectLine';
import EnterGrades from '../../../components/consultant/enterGrades';
import { useState } from 'react';

// mocktest와 schooltest를 어떻게 라우터화 할 지 고민해봐야됨

function MockTest() {
  // 메인 페이지에서 학생 id가져오기
  const location = useLocation();
  console.log('모의고사 점수 등록 페이지. 학생 아이디는 다음과 같다.', location.state.studentId);

  const [selectedGrade, setSelectedGrade] = useState('');

  return (
    <Wrapper>
      <NavBar />
      <FlexWrapper>
        <ChooseSchoolMock studentId={location.state.studentId} />
        <MainContent>
          <Explan>모의고사 등급을 입력해주세요</Explan>
          <GradeSelect selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade} />
          <FormWrapper>
            <SubjectLine />
            <EnterGradeWrapper>
              {/*
               * 여기 아래의 성적 입력 컴포넌트들을
               * props를 사용하여 구분하면 되지 않을까 하는 생각입니다
               */}
              <EnterGrades examId="5" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="6" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="7" selectedGrade={selectedGrade} studentId={location.state.studentId} />
            </EnterGradeWrapper>
          </FormWrapper>
          <FormWrapper>
            <SubjectLine />
            <EnterGradeWrapper>
              {/*
               * 여기 아래의 성적 입력 컴포넌트들을
               * props를 사용하여 구분하면 되지 않을까 하는 생각입니다
               */}
              <EnterGrades examId="8" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="9" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="10" selectedGrade={selectedGrade} studentId={location.state.studentId} />
            </EnterGradeWrapper>
          </FormWrapper>
        </MainContent>
      </FlexWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(107deg, #fff7f8 7.23%, #e5e4fe 99.24%);
  width: 100%;
  height: 100%;
`;

const FlexWrapper = styled.div`
  width: 51rem;
  height: 43rem;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  margin: 2rem auto;
`;

const MainContent = styled.div`
  width: 100%;
  text-align: center;
`;

const Explan = styled.div`
  font-size: 1.5rem;
  margin-top: 2%;
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 15.25rem;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const EnterGradeWrapper = styled.div`
  width: 100%;
  padding-left: 20%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-evenly;
`;

export default MockTest;
