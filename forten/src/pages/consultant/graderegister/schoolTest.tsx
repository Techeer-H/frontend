import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../../components/consultant/navBar';
import ChooseSchoolMock from '../../../components/consultant/chooseSchoolMock';
import GradeSelect from '../../../components/consultant/gradeSelect';
import SubjectLine from '../../../components/consultant/subjectLine';
import EnterGrades from '../../../components/consultant/enterGrades';
import { useState } from 'react';

// const MemoizedEnterGrades = React.memo(EnterGrades);

// mocktest와 schooltest를 어떻게 라우터화 할 지 고민해봐야됨

function SchoolTest() {
  // 메인 페이지에서 학생 id가져오기
  const location = useLocation();

  // 상태를 추가하고 해당 상태의 값을 가져오거나 업테이트
  //이게 setState인가?? 암튼 setState을
  //최종값 업데이트하는 값
  const [selectedGrade, setSelectedGrade] = useState('고1');

  console.log('내신 등급 입력 컴포넌트', location.state.studentId);
  return (
    <Wrapper>
      <NavBar />
      <FlexWrapper>
        <ChooseSchoolMock studentId={location.state.studentId} />
        <MainContent>
          <Explan>내신 등급을 입력해주세요</Explan>
          <GradeSelect selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade} />
          <FormWrapper>
            <SubjectLine />
            <EnterGradeWrapper>
              {/*
               * 여기 아래의 성적 입력 컴포넌트들을
               * props를 사용하여 구분하면 되지 않을까 하는 생각입니다
               */}
              <EnterGrades examId="1" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="2" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="3" selectedGrade={selectedGrade} studentId={location.state.studentId} />
              <EnterGrades examId="4" selectedGrade={selectedGrade} studentId={location.state.studentId} />
            </EnterGradeWrapper>
          </FormWrapper>
        </MainContent>
      </FlexWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(107deg, #fff7f8 7.23%, #e5e4fe 99.24%);
  width: 100%;
  height: 100%;
`;

export const FlexWrapper = styled.div`
  width: 51rem;
  height: 43rem;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  margin: 2rem auto;
`;

export const MainContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const Explan = styled.div`
  font-size: 1.5rem;
  margin-top: 2%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 15.25rem;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const EnterGradeWrapper = styled.div`
  width: 100%;
  padding-left: 15%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-evenly;
`;

export default SchoolTest;
// export default React.memo(SchoolTest);
